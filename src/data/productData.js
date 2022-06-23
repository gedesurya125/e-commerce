import image1Thumbnail from 'assets/images/image-product-1-thumbnail.jpg';
import image2Thumbnail from 'assets/images/image-product-2-thumbnail.jpg';
import image3Thumbnail from 'assets/images/image-product-3-thumbnail.jpg';
import image4Thumbnail from 'assets/images/image-product-4-thumbnail.jpg';
import image1 from 'assets/images/image-product-1.jpg';
import image2 from 'assets/images/image-product-2.jpg';
import image3 from 'assets/images/image-product-3.jpg';
import image4 from 'assets/images/image-product-4.jpg';

export const productData = {
  id: 1,
  images: [
    {
      hiRes: image1,
      thumbnail: image1Thumbnail
    },
    {
      hiRes: image2,
      thumbnail: image2Thumbnail
    },
    {
      hiRes: image3,
      thumbnail: image3Thumbnail
    },
    {
      hiRes: image4,
      thumbnail: image4Thumbnail
    }
  ],
  information: {
    companyName: 'Sneaker Company',
    title: 'Fall Limited Edition Sneakers',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    price: 250, // in dollars
    discount: 50 // in percent
  }
};
