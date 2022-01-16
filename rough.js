Math.floor(Math.random() * 100)
var stars = [1, 2, 3, 4, 5]

stars[Math.floor(Math.random() * stars.length)]
let tags = [["south", "north"], ["south"], ["south", "spicy"], ["chill"], ["north"], ["thali"], ["meals", "nagarjuna"]]
tags[Math.floor(Math.random() * tags.length)]

let imgs = ['http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg', 'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg', 'http://dagzhsfg97k4.cloudfront.net/wp-content/uploads/2012/05/lentils3.jpg', 'http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg', 'http://elanaspantry.com/wp-content/uploads/2008/10/acorn_squash_with_cranberry.jpg', 'http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg', 'http://s3.amazonaws.com/gmi-digital-library/65caecf7-a8f7-4a09-8513-2659cf92871e.jpg', 'http://www.canadianliving.com/img/photos/biz/blueberry-oatmeal-squares5801359401371.jpg', 'http://www.chatelaine.com/wp-content/uploads/2013/05/Curried-chicken-salad.jpg']

imgs[Math.floor(Math.random() * imgs.length)]

let foodName = ['Bombay biryani', 'Sabudana vada', 'Pesara dosa', 'Uttapam', 'Galouti kebab', 'Pasanda', 'Chikki', 'Aloo tikki', 'Avial', 'Pitha', 'Baati', 'Panjiri', 'Medu vada', 'Curd Rice', 'Shrikhand', 'Punjabi kadhi', 'Coconut Chutney', 'Aloo gobi', 'Paneer tikka', 'Madras Curry', 'Dhokla', 'Kadai paneer', 'Bhakri', 'Muthia', 'Mattar paneer', 'Phirni', 'Aluchya Wadya', 'Aloo paratha', 'Kaju katli', 'Jeera Rice', 'Kulcha', 'Kachori', 'Bonda', 'Jalebi', 'Laal maas', 'Dal tadka', 'Putu mayam', 'Falooda', 'Chole bhature', 'Mysore pak', 'Misal pav', 'Gajar ka halwa', 'Malai kofta', 'Bhelpuri', 'Modak', 'Saag paneer', 'Raita', 'Jalfrezi', 'Shahi paneer', 'Pongal', 'View more']




let data = foodName.map(f => {
    return {
        name: f,
        ratings: stars[Math.floor(Math.random() * stars.length)],
        imageUrl: imgs[Math.floor(Math.random() * imgs.length)],
        tags: tags[Math.floor(Math.random() * tags.length)],
        eta: `${Math.floor(Math.random() * 100)} min`
    }
})


console.log(JSON.stringify(data))