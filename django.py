import os
import shutil
import re

# Paths
NEXT_EXPORT_DIR = "./out"  # Path to Next.js export folder
DJANGO_TEMPLATE_DIR = "/media/muhammad-samsuddin/03d78e02-b4cf-44fa-b63f-870156436d33/softbd/workstation/own/python/solution_media/templates"  # Path to Django templates directory
DJANGO_STATIC_DIR = "/media/muhammad-samsuddin/03d78e02-b4cf-44fa-b63f-870156436d33/softbd/workstation/own/python/solution_media/static"  # Path to Django static directory

def update_html_files(src_dir, dest_dir):
    """
    Process HTML files in the source directory and replace asset paths with {% static %} tags.
    Save updated files to the destination directory.
    """
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)

    for root, _, files in os.walk(src_dir):
        for file in files:
            if file.endswith(".html"):
                src_file_path = os.path.join(root, file)
                dest_file_path = os.path.join(dest_dir, os.path.relpath(src_file_path, src_dir))

                os.makedirs(os.path.dirname(dest_file_path), exist_ok=True)

                with open(src_file_path, "r", encoding="utf-8") as f:
                    content = f.read()

                updated_content = re.sub(
                        r'(<(?:link|script)[^>]*?)\s+(href|src)="(/[^"]+)"',
                        lambda m: f'{m.group(1)} {m.group(2)}="{{% static \'{m.group(3)}\' %}}"',
                        content
                    )

                # Write the updated content to the destination
                with open(dest_file_path, "w", encoding="utf-8") as f:
                    f.write("{% load static %}\n" + updated_content)


def copy_static_files(src_dir, dest_dir):
    """
    Copy static files (_next, etc.) from the Next.js export to the Django static directory.
    """
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)

    for root, dirs, files in os.walk(src_dir):
        for dir_name in dirs:
            if dir_name == "_next":  # Copy only the _next directory and other static assets
                src_path = os.path.join(root, dir_name)
                dest_path = os.path.join(dest_dir, dir_name)
                shutil.copytree(src_path, dest_path, dirs_exist_ok=True)


def main():
    print("Processing Next.js export for Django...")

    # Update HTML files
    update_html_files(NEXT_EXPORT_DIR, DJANGO_TEMPLATE_DIR)
    print(f"Updated HTML files saved to: {DJANGO_TEMPLATE_DIR}")

    # Copy static files
    copy_static_files(NEXT_EXPORT_DIR, DJANGO_STATIC_DIR)
    print(f"Static files copied to: {DJANGO_STATIC_DIR}")

    print("Processing completed successfully!")


if __name__ == "__main__":
    main()
