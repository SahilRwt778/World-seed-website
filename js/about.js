const about=[
    {
        title:"Our Mission :",
        des:"Welcome to world seed , where we aim to provide comprehensive, accurate, and engaging information about seeds from around the world. Our mission is to educate and inspire gardeners, farmers, and plant enthusiasts by offering a rich resource of seed knowledge."
    }, {
        title:"Our Vision :",
        des:"We envision a world where every individual has the knowledge and resources to cultivate their own plants, contributing to a greener, more sustainable planet. By sharing detailed information on seed varieties, planting techniques, and the benefits of growing your own plants, we hope to foster a community of knowledgeable and passionate growers."
    }, {
        title:"What We Offer :",
        des:`Seed Encyclopedia: A comprehensive database of seed varieties, including detailed descriptions, growing conditions, and care instructions.
Gardening Tips: Practical advice on seed starting, soil preparation, pest management, and more.
Educational Resources: Articles, guides, and tutorials on topics ranging from plant biology to sustainable gardening practices.
Community: A space for seed enthusiasts to connect, share experiences, and learn from each other through forums and social media.`
    }, {
        title:"Our Commitment :",
        des:"We are committed to providing accurate, up-to-date information that is easy to understand and apply. We believe in the power of knowledge and its ability to transform gardens, communities, and lives. Our team continually researches and updates our content to ensure that you have access to the latest and most reliable information."
    }, {
        title:"Join Us :",
        des:"Whether you are a seasoned gardener or just starting your journey with seeds, World Seed is here to support you every step of the way. Join our community, explore our resources, and start growing with us today!"
    },{
        title:"Contact Us :",
        des:`Have questions or suggestions? We'd love to hear from you! Reach out to us at sahilrawatjj@gmail.com or connect with us on [social media links].`
    }
]

const Aabout=document.getElementById("about")

about.filter(item=>item.title).forEach(item=>{
    const itemDiv=document.createElement('div');
    itemDiv.innerHTML=`<div >
    
    <h1>${item.title}</h1>
    <h2>${item.des}</h2
    ></div>
    `;

    Aabout.appendChild(itemDiv);
})