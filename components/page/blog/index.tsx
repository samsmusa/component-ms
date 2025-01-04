"use client"

import React, {useState} from 'react';
import {BlogCard, BlogCardSkeleton} from "@/components/page/blog/BlogCard";
import {Button} from "@/components/ui/button";


const blogPosts = [
    {
        id: 1,
        title: "Getting Started with SaaSy",
        excerpt: "Learn how to set up your SaaSy account and start boosting your productivity today.",
        date: "2024-03-01",
        slug: "getting-started-with-saasy"
    },
    {
        id: 2,
        title: "5 Tips for Maximizing Your Workflow",
        excerpt: "Discover the best practices for optimizing your team's workflow using SaaSy's powerful features.",
        date: "2024-03-15",
        slug: "5-tips-for-maximizing-your-workflow"
    },
    {
        id: 3,
        title: "The Future of AI in Project Management",
        excerpt: "Explore how artificial intelligence is revolutionizing project management and how SaaSy is leading the charge.",
        date: "2024-04-01",
        slug: "future-of-ai-in-project-management"
    }
]

const BlogPage = () => {
    const [loading, setLoading] = useState(false)
    return (
        <div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <BlogCard post={post} key={post.id}/>
                ))}
                {
                    loading && Array(3).fill(0).map((_, i)=><BlogCardSkeleton key={i} />)
                }
                <Button onClick={()=>setLoading(true)} className="w-2/5">Load More...</Button>
            </div>
        </div>
    );
};

export default BlogPage;