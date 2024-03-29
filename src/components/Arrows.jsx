import { FaArrowDown, FaArrowUp  } from "react-icons/fa";
import { Button, Tooltip } from "@nextui-org/react";
import { useState } from "react";

export default function Arrows() {

    const [section, setSection] = useState()

    const changeSection = (e, type) => {
        let currentSection = document.querySelector("section:target") || document.querySelector("section:first-of-type");
        let nextSection;
        
        if(type == 'down'){
            nextSection = currentSection.nextElementSibling || document.querySelector("section:first-of-type");
        }else{
            nextSection = currentSection.previousElementSibling || document.querySelector("section:last-of-type")
        }

        setSection(nextSection.id)
        window.location.href = `#${nextSection.id}`
        nextSection.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            {section !== 'contact' && 
                <Tooltip delay={0} placement="bottom" className="text-colormind-text bg-colormind-primary" showArrow={true} content="Bajar">
                    <Button className="rounded-full fixed right-0 top-16 m-8 z-20 bg-colormind-button animate-bounce" onClick={(e) => changeSection(e, 'down')} isIconOnly aria-label="Bajar">
                        <FaArrowDown />
                    </Button> 
                </Tooltip>
            }

            {section !== 'about' &&
                <Tooltip delay={0} placement="bottom" className="text-colormind-text bg-colormind-primary" showArrow={true} content="Subir">
                    <Button className="rounded-full fixed right-0 bottom-0 m-8 z-20 bg-colormind-button animate-bounce" onClick={(e) => changeSection(e, 'up')} isIconOnly aria-label="Subir">
                        <FaArrowUp />
                    </Button>
                </Tooltip>
            }
        </>
    )
}