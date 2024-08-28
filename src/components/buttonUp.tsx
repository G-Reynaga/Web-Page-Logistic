"use client"

import { useEffect, useState } from "react";
import { HiArrowSmallUp } from "react-icons/hi2";
import { Button } from "./ui/button";

function ButtonUp() {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const handleClickTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed bottom-2 right-2 transition-opacity z-10 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <Button className={`size-12 group backdrop-blur hover:scale-105 hover:border-accent motion-safe:transition hover:bg-transparent ${visible ? 'cursor-pointer' : 'cursor-default'}`}
                variant={"outline"}
                aria-label="Button-up"
                size="icon"
                onClick={handleClickTop}
            >
                <HiArrowSmallUp  className="size-8 rotate-45 group-hover:rotate-0 motion-safe:transition" />
            </Button>
        </div>
    );
}

export default ButtonUp;
