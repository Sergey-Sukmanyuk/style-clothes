import Categories from "../../components/categories/categories";

const Home = () => {
    const categories = [
        {
          id: 1,
          title: "hats",
          imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
        },
        {
          id: 2,
          title: "jackets",
          imgUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        },
        {
          id: 3,
          title: "sneakers",
          imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        },
        {
          id: 4,
          title: "womens",
          imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        },
        {
          id: 5,
          title: "mens",
          imgUrl: "https://i.ibb.co/R70vBrQ/men.png",
        },
      ];
    
      return <Categories categories={categories} />;
}

export default Home;