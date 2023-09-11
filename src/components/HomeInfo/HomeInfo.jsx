import './HomeInfo.css'

function HomeInfo({ image, title, description, alt }) {
    return (
        <div class="feature-item">
            <img src={image} alt={alt} class="feature-icon" />
            <h3 class="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default HomeInfo;