import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaShareAlt } from 'react-icons/fa';


const NewsCard = ({ news }) => {

  const { _id, title, details, image_url, rating,total_view,thumbnail, author } = news;

  return (

    <Card className="mb-4">
      <Card.Header className='d-flex justify-content-between'>
        <div className='d-flex ps-2'>
          <Image style={{ height: 40 }} src={author.img} roundedCircle />
          <div>
            <h4>{author.name}</h4>
            <small>{moment(author.published_date).format('yyyy-MM-D')}</small>
          </div>
        </div>
        <div className='d-flex text-center'>
          <h2><FaBookmark /></h2>
          <h2><FaShareAlt /></h2>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />

        <Card.Text>
          {details.length < 250 ? <>{details}</> :
            <>{details.slice(0.250)}...<Link to={`/news/${_id}`}>Read More</Link></>
          }
        </Card.Text>

      </Card.Body>
      <Card.Footer className="text-muted">
        <div>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye></FaEye>{total_view}
        </div>
      </Card.Footer>
    </Card>

  );
};

export default NewsCard;