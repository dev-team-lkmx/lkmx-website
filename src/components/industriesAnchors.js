import React, { useEffect, useRef } from "react";
import styles from "@/components/industriesAnchors.module.scss";
import { Block, Column } from "@lkmx/flare-react";
import Image from "next/image";


export default function IndustriesAnchors({anchorsData}) {
    const tickingRef = useRef(false);
    useEffect(() => {
        const headerOffset = 56; // sticky header height
        const activeColor = "#0B0E29";
        const inactiveColor = "#93949E";

        const setActiveIndex = (activeIndex) => {
            anchorsData.forEach((_, idx) => {
                const span = document.getElementById(`span${idx}`);
                if (!span) return;
                span.style.color = idx === activeIndex ? activeColor : inactiveColor;
            });
        };

        const computeActive = () => {
            let bestIndex = -1;
            let bestDistance = Infinity;
            anchorsData.forEach((element, idx) => {
                const el = document.getElementById(element.title);
                if (!el) return;
                const rect = el.getBoundingClientRect();
                // distance from target top to header baseline
                const distance = Math.abs(rect.top - headerOffset);
                // Prefer sections that have passed the header (rect.top <= headerOffset)
                const isPastHeader = rect.top <= headerOffset;
                const score = isPastHeader ? distance : distance + 1000; // penalize ones below header
                if (score < bestDistance) {
                    bestDistance = score;
                    bestIndex = idx;
                }
            });
            if (bestIndex >= 0) setActiveIndex(bestIndex);
        };

        const onScroll = () => {
            if (tickingRef.current) return;
            tickingRef.current = true;
            requestAnimationFrame(() => {
                computeActive();
                tickingRef.current = false;
            });
        };

        // Initialize and bind
        computeActive();
        document.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        return () => {
            document.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [anchorsData]);
    
    return(
        <Column mode="normal" modeL="slim" modeXxxl="normal"  className={styles.anchors__sections}>
            <Block className={styles.anchors__sections__block}>  
                <div className={styles.anchors__sections__block__wrapper}>
                    <nav className={styles.anchors__sections__block__wrapper__aside}> 
                    {anchorsData.map((data, index) => {
                        return(
                            <a className={styles.anchors__sections__block__wrapper__aside__anchor} href={`#${data.title}`} key={index}>
                                <span id={`span${index}`}>{data.title}</span>                            
                            </a>                       
                        );
                        })}     
                        </nav>  
                </div>                                                                                               
                <section className={styles.anchors__sections__block__black}>        
                    {anchorsData.map((data, index) => {
                        return(
                        <article className={styles.anchors__sections__block__black__item} key={index} id={data.title}>
                            <div className={styles.anchors__sections__block__black__item__image}>
                                <Image
                                fill
                                src={data.img}
                                alt="Industry icon"
                                />
                            </div>                            
                            <div  className={styles.anchors__sections__block__black__item__content}>                                
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                                <span>{data.capabilitiesTitle}</span> 
                                <div className={styles.anchors__sections__block__black__item__content__capabilities}>
                                    {data.capabilities.map((capability, index) => {
                                        return(
                                            <a href={capability.ref} key={index} className={capability.ref === "" ? `${styles.anchors__sections__block__black__item__content__capabilities__disabled}` : `${styles.anchors__sections__block__black__item__content__capabilities__enabled}`}>
                                                {capability.name[0]}
                                                <br/>
                                                {capability.name[1]}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </article>
                        )
                    })}                
                </section>
            </Block>
        </Column>
    );
}   