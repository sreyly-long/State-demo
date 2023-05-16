export function Cards({title, thumbnail}){
    return (
        <div class="card h-100 border-0 shadow-sm">
            <img src={thumbnail} class="card-img-top" alt="product" />
            <div class="card-body">
                <p class="card-text">{title}</p>
            </div>
        </div>
    )
}
