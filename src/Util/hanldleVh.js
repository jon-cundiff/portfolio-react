const handleVh = () => {
    const vh = window.innerHeight * 0.01;

    /*
        equivalent of following CSS if vh caculates to 30:
        :root {
            --vh: 30px;
        }
    */
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

window.addEventListener("resize", handleVh);

export default handleVh;
