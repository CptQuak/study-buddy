import { Button } from 'components/atoms/Button/Button';
import React, { useState, useEffect } from 'react';
import {
  NewsSectionHeader,
  Wrapper,
  ArticleWrapper,
  TitleWrapper,
  ContentWrapper,
} from './NewsSection.styled';
import axios from 'axios';
const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setErorr] = useState(false);

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
        allArticles{
            id
            title
            category
            content
            image{
            url
            }
        }
        }`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(
        ({
          data: {
            data: { allArticles },
          },
        }) => {
          setArticles(allArticles);
        }
      )
      .catch((err) => {
        setErorr(true);
      });
  }, []);
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt={title} /> : null}
            </ContentWrapper>

            <Button isBig>Click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>
          {error ? 'Sorry an error has occurred' : 'Loading...'}
        </NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
