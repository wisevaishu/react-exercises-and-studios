export default function HobbyLinks() {
    let pageTitle = "My Favourite Hobbies";
    let hobby1 = "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334862.jpg?size=626&ext=jpg&ga=GA1.1.110453765.1709693730&semt=sph";
    let hobby2 = "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=740&t=st=1709693733~exp=1709694333~hmac=8562e233cecd983fe332c1d7693572ab82a944dc5074cd541c8efa42880f713f";
    let hobbyLinks =[hobby1, hobby2];

    return (
        <div style={{background: 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc 100%)'}}>
            <h3>{pageTitle}</h3>
            <a href = {hobbyLinks[0]} style={{ display: "block" }}>Hobby 1</a>
            <a href = {hobbyLinks[1]} style={{ display: "block" }}>Hobby 1</a>
        </div>
    );
}