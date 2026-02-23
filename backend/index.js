import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    },
    {
      id: 2,
      name: "modern chair",
      price: 120,
      image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
    },
    {
      id: 3,
      name: "office desk",
      price: 350,
      image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
    },
    {
      id: 4,
      name: "comfortable sofa",
      price: 600,
      image:
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    },
    {
      id: 5,
      name: "bed frame",
      price: 450,
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    },
    {
      id: 6,
      name: "night lamp",
      price: 80,
      image: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg",
    },
    {
      id: 7,
      name: "bookshelf",
      price: 250,
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    },
    {
      id: 8,
      name: "dining table",
      price: 700,
      image:
        "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
    },
    {
      id: 9,
      name: "gaming chair",
      price: 300,
      image:
        "https://images.pexels.com/photos/7862594/pexels-photo-7862594.jpeg",
    },
    {
      id: 10,
      name: "wardrobe closet",
      price: 550,
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((products) =>
      products.name.includes(req.query.search),
    );
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Running on aport ${port}`);
});
