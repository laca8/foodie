/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useState } from "react";


const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ rating, review });

        // Send review data to API
        alert("Review submitted!");
        setRating(0);
        setReview("");
    };
    const reviews: any[] = []
    return (
        <div className="grid grid-cols-3 gap-10 bg-white shadow-lg rounded-lg mb-4 p-2">
            <div className="col-span-1">

                {/* Star Rating System */}
                <div className="flex space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            className={`cursor-pointer text-2xl ${(hover || rating) >= star ? "text-yellow-500" : "text-gray-300"
                                }`}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setRating(star)}
                        />
                    ))}
                </div>

                {/* Review Input */}
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                    placeholder="Write your review..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                ></textarea>

                {/* Submit Button */}
                <Button
                    onClick={handleSubmit}
                    disabled={!rating || !review}
                    className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]"
                >
                    Submit Review
                </Button>
            </div>
            {/* Reviews List */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Customer Reviews:</h3>
                {reviews.length > 0 ? (
                    <ul className="space-y-4">
                        {reviews.map((rev) => (
                            <li key={rev.id} className="p-3 border border-gray-300 rounded-lg">
                                <div className="flex items-center mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`text-lg ${i < rev.rating ? "text-yellow-500" : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-700">{rev.text}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No reviews yet. Be the first to leave one!</p>
                )}
            </div>
        </div>
    );
};

export default ReviewForm;
