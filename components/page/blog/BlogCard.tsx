import React from 'react';
import {Blog} from "@/core/common/Interfaces";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";


export function BlogCard({post}: { post: Blog }) {
    return <Card key={post.id}>
        <CardHeader>
            <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-gray-500 dark:text-gray-400">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
                                            <span
                                                className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
            <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                Read More
            </Link>
        </CardFooter>
    </Card>
}

export function BlogCardSkeleton() {
    return <Card className="animate-pulse">
        <CardHeader>
            <CardTitle className="h-6 bg-slate-200 rounded"></CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
            <p className="h-4 bg-slate-200 rounded"></p>
            <p className="h-4 bg-slate-200 rounded"></p>
            <p className="h-4 bg-slate-200 rounded"></p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
                                            <span
                                                className="h-2 bg-slate-200 rounded"></span>

        </CardFooter>
    </Card>
}