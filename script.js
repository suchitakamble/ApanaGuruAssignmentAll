class CardComponent extends HTMLElement {
    static observedAttributes = ["config", "data"];

    defaultConfig = {
        cardContainerClass: "card my-3 position-relative",
        cardBodyClass: "card-body",
        imageClass: "card-img-top",
        titleClass: "card-title",
        subTitleClass: "card-subtitle my-3",
        textClass: "card-text",
        buttonClass: "btn btn-primary position-absolute top-50 start-50 translate-middle", // button color 
        cardWidth: "250px",
        cardHeight: "150px" 
    };

    defaultData = {
        title: " ",
        subTitle: " ",
        description: " ",
        image: "Image/two-happy-busy-middle-aged-260nw-2479065515.webp",
        button: "Click Me!",
        showImage: true, 
        showTitle: true, 
        showSubTitle: true, 
        showDescription: true, 
        showButton: true
    };

    data = {};
    config = {};

    constructor() {
        super();
        this.data = { ...this.defaultData };
        this.config = { ...this.defaultConfig };
    }

    connectedCallback() {
        this.updateData();
        this.renderComponent();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        try {
            if (name === 'config' && typeof newValue === 'string') {
                this.config = { ...this.config, ...JSON.parse(newValue) };
            }
            if (name === 'data' && typeof newValue === 'string') {
                this.data = { ...this.data, ...JSON.parse(newValue) };
            }
        } catch (e) {
            console.error("Error parsing attribute:", e);
        }
        this.renderComponent();
    }

    updateData() {
        const updatedData = this.getAttribute('data');
        if (updatedData) {
            this.data = { ...this.data, ...JSON.parse(updatedData) };
        }
    }

    renderComponent() {
        this.innerHTML = ''; // Clear previous content
        this.className = this.config.cardContainerClass;
        
        this.style.width = this.config.cardWidth;
        this.style.height = this.config.cardHeight;
        this.style.display = 'inline-block';
        this.style.position = 'relative';
        
        // Render image if showImage is true and image is provided
        if (this.data.showImage && this.data.image) {
            const img = document.createElement('img');
            img.className = this.config.imageClass;
            img.src = this.data.image;
            img.style.height = '150px';
            img.style.objectFit = 'cover';
            img.style.transition = 'filter 0.3s ease-in-out';
            
            // Click event on image
            img.addEventListener('click', () => {
                alert('Image clicked!');
            });
            
            // Hover effect
            img.addEventListener('mouseenter', () => {
                img.style.filter = 'hue-rotate(190deg)';
            });
            img.addEventListener('mouseleave', () => {
                img.style.filter = 'none';
            });
            
            this.appendChild(img);
        }

        // Create the card body element
        const cardBody = document.createElement('div');
        cardBody.className = this.config.cardBodyClass;
        
        if (this.data.showTitle) {
            const title = document.createElement('h5');
            title.className = this.config.titleClass;
            title.textContent = this.data.title;
            cardBody.appendChild(title);
        }
        
        if (this.data.showSubTitle) {
            const subTitle = document.createElement('h6');
            subTitle.className = this.config.subTitleClass;
            subTitle.textContent = this.data.subTitle;
            cardBody.appendChild(subTitle);
        }

        if (this.data.showDescription) {
            const description = document.createElement('p');
            description.className = this.config.textClass;
            description.textContent = this.data.description;
            cardBody.appendChild(description);
        }

        if (this.data.showButton) {
            const button = document.createElement('button');
            button.className = this.config.buttonClass;
            button.textContent = this.data.button;
            button.style.position = 'absolute';
            button.style.top = '50%';
            button.style.left = '50%';
            button.style.transform = 'translate(-50%, -50%)';
            button.style.zIndex = '2';
            
            // Change button color on hover
            button.addEventListener('mouseenter', () => {
                button.style.backgroundColor = 'black';
            });
            button.addEventListener('mouseleave', () => {
                button.style.backgroundColor = ''; // Reset to default
            });
            
            button.addEventListener('click', () => {
                window.location.href = 'https://www.google.com';
            });
            this.appendChild(button);
        }

        this.appendChild(cardBody);
    }
}

// Define the CardComponent custom element
customElements.define('card-component', CardComponent);
