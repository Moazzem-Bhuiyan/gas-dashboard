"use client";
import Image from "next/image";
import image1 from "@/assets/articles/article1.png";
import image2 from "@/assets/articles/article2.png";
import image3 from "@/assets/articles/article2.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "antd";
import { Search } from "lucide-react";
import Link from "next/link";
import AddArticleModal from "./AddArticleModal";
export default function AllArticle() {
    const [searchText, setSearchText] = useState("");
    const [open, setOpen] = useState(false);
    // Static category data
    const categories = [
        {
            _id: "1",
            name: "Blackops Airsoft Bristol Blackops Airsoft Bristol",
            banner: image1,
            category: "Event"
        },
        {
            _id: "2",
            name: "Blackops Airsoft Bristol Blackops Airsoft Bristol",
            banner: image2,
            category: "News"
        },
        {
            _id: "3",
            name: "Blackops Airsoft & Living Blackops Airsoft Bristol",
            banner: image3,
            category: "Blog"
        },
        {
            _id: "4",
            name: "Blackops Airsoft & Living Blackops Airsoft Bristol",
            banner: image1,
            category: "Update"
        },
        {
            _id: "5",
            name: "Blackops Airsoft & Living Blackops Airsoft Bristol",
            banner: image3,
            category: "Review"
        },
        {
            _id: "6",
            name: "Blackops Airsoft & Living Blackops Airsoft Bristol",
            banner: image3,
            category: "Event"
        },
        {
            _id: "7",
            name: "Blackops Airsoft & Living Blackops Airsoft Bristol",
            banner: image1,
            category: "Event"
        },
        {
            _id: "8",
            name: "Blackops Airsoft & Living Blackops Airsoft Bristol",
            banner: image3,
            category: "Event"
        },
    ];
    const router = useRouter()
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(categories.length / itemsPerPage);

    // Calculate the items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = categories.slice(startIndex, startIndex + itemsPerPage);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // handle view details

    const handleViewDetails = () => {
        router.push("/admin/articleDetails")
    }

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-20">
            {/* Grid Layout */}
            <>
                <div className=" flex mb-4 ml-auto w-1/2 gap-x-5">
                    <Input
                        placeholder="Search by article name "
                        prefix={<Search className="mr-2 text-gray-500" size={20} />}
                        className="h-11 rounded-lg border text-base"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Link href={''}>
                        <Button onClick={() => {
                            setOpen(true)
                        }} style={
                            {
                                backgroundColor: "#000",
                                color: "white",
                                borderRadius: "8px",
                                padding: "0.5rem 1rem",
                                fontSize: "0.875rem",
                                height: "2.5rem",
                            }
                        } className="">
                            Upload Article
                        </Button>
                    </Link>
                </div>
                <div
                >


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {currentItems.length ? (
                            currentItems.map((category) => (
                                <div
                                    key={category._id}
                                    className="border bg-gray-100 rounded-t-2xl shadow-md"
                                >
                                    <Image
                                        className="rounded-t-2xl w-full h-[200px] object-cover"
                                        height={200}
                                        width={300}
                                        src={category.banner}
                                        alt={category.name}
                                    />

                                    <div className="p-5">
                                        <div className="mb-3 border rounded-full flex justify-center items-center p-1 w-[100px] bg-blue-400 text-blue-500 bg-opacity-15">{category?.category}</div>
                                        <h1 className="text-lg font-semibold text-gray-800 mb-3">
                                            {category.name}
                                        </h1>
                                        <button onClick={handleViewDetails} className="flex items-center justify-center bg-black text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out">
                                            <span className="button-text">View Details</span>
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-3 flex items-center justify-center h-[250px]">
                                <p className="text-gray-500">No categories available</p>
                            </div>
                        )}
                    </div>


                </div>

            </>

            {/* Pagination Dots */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`w-4 h-4 rounded-full ${currentPage === index + 1 ? "bg-gray-800" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            )}


            <AddArticleModal open={open} setOpen={setOpen} />
        </div>
    );
}