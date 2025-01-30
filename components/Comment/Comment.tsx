"use client"
import { Heart } from 'lucide-react';
import React, { useState } from 'react';

interface Comment {
    id: number;
    author: string;
    text: string;
    replies: Comment[];
    date: string;
}

const CommentSection: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>('');

    const handleCancelComment = () => {
        setNewComment('');
    }
    const handleAddComment = () => {
        const dateToday = new Date();
        if (newComment.trim()) {
            const newCommentObj: Comment = {
                id: Date.now(),
                author: 'Anonymous', // Replace with actual user data
                text: newComment,
                replies: [],
                date: dateToday.toDateString(),
            };
            setComments([...comments, newCommentObj]);
            setNewComment('');
        }
    };

    const handleReply = (id: number, replyText: string) => {
        const dateToday = new Date();
        const updatedComments = comments.map(comment => {
            if (comment.id === id) {
                const newReply: Comment = {
                    id: Date.now(),
                    author: 'Anonymous', // Replace with actual user data
                    text: replyText,
                    replies: [],
                    date: dateToday.toDateString(),
                };
                return { ...comment, replies: [...comment.replies, newReply] };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    return (
        <div className="mt-7 max-w-[836px] mx-auto">
            <h2 className='text-center mb-3 leading-[32px] text-lg font-semibold'>Leave a comment</h2>
            <div className='flex flex-col gap-2 justify-center'>
                <input
                    type="text"
                    value={newComment}
                    className='px-2 py-1 outline-none border-b border-[#b0b0b0] bg-transparent'
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                />
                <div className='flex justify-end gap-4'>
                    <button onClick={handleCancelComment}>Cancel</button>
                    <button className='bg-[#b0b0b0] transition-all hover:bg-[#848383] rounded-md px-3 py-1 text-white' onClick={handleAddComment}>Comment</button>
                </div>
            </div>
            <div className='mt-5'>
                {comments.map(comment => (
                    <CommentItem isReply={false} key={comment.id} comment={comment} onReply={handleReply} />
                ))}
            </div>
        </div>
    );
};

interface CommentItemProps {
    comment: Comment;
    onReply: (id: number, replyText: string) => void;
    isReply: boolean;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, onReply, isReply }) => {
    const [replyText, setReplyText] = useState<string>('');
    const [showReply, setShowReply] = useState<boolean>(false);

    const handleReplySubmit = () => {
        if (replyText.trim()) {
            onReply(comment.id, replyText);
            setReplyText('');
            setShowReply(false);
        }
    };
    const handleReplyCancel = () => {
        setReplyText('');
        setShowReply(false);
    }

    return (
        <div className={`${isReply ? 'pl-5 border-l border-[#b0b0b0] pb-3' : 'mt-5'}`}>
            <p><strong className='text-md'>{comment.author}</strong> <span className='text-sm text-[#b0b0b0]'>{comment.date}</span></p>
            <p>{comment.text}</p>
            <div className={`flex items-center gap-4 mt-2 ${!isReply && "mb-3"}`}>
                <div className='text-[14px] text-[#979797] flex items-center gap-1'><Heart size={14} strokeWidth={3} /> <strong>0</strong></div>
                {!isReply && (<button className='text-[#979797] text-sm' onClick={() => setShowReply(!showReply)}><strong>Reply</strong></button>)}
            </div>    
            {showReply && (
                <div className='mt-3 flex flex-col justify-end'>
                    <input
                        type="text"
                        className='bg-transparent border-b border-[#b0b0b0] outline-none px-2 py-1'
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Add a reply"
                    />
                    <div className='flex justify-end gap-4 mt-2'>
                        <button onClick={handleReplyCancel}>Cancel</button>
                        <button onClick={handleReplySubmit} className='bg-[#b0b0b0] transition-all hover:bg-[#848383] rounded-md px-3 py-1 text-white'>Reply</button>
                    </div>
                </div>
            )}
            {comment.replies.map(reply => (
                <CommentItem isReply={true} key={reply.id} comment={reply} onReply={onReply} />
            ))}
        </div>
    );
};

export default CommentSection;
