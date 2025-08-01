const initGalleryViewer = () => {
    const viewer = document.getElementById("viewer");
    const viewerImg = document.getElementById("viewer-img");
    const viewerCaption = document.getElementById("viewer-caption");
    const closeBtn = document.getElementById("close-viewer");

    // Click on gallery image to open viewer
    document.querySelectorAll(".gallery img").forEach((img) => {
        img.addEventListener("click", () => {
            viewerImg.src = img.src;
            viewerImg.alt = img.alt;
            viewerCaption.textContent = img.alt;

            viewer.classList.add("open");
            viewer.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
            console.log(viewer.classList); // Log the class list
        });
    });

    // Close button hides the viewer
    closeBtn.addEventListener("click", () => {
        console.log('Close button clicked'); // Log to check if it's triggering
        viewer.classList.remove("open");
        viewer.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto";
    });
    
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && viewer.classList.contains("open")) {
            closeBtn.click();
        }
    });
};

export { initGalleryViewer };
