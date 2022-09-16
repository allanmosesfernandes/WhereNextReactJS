import React from 'react'
import './news.scss'
import NEWS_JSON from '../../news.json'
const News = () => {
  return (
    <div className="container">
        <div className="articles-container">
            <h1>News</h1>
            <div className="focus-article">
                <div className="focus-left">
                    <a href='https://thepienews.com/news/international-education-marks-passing-of-queen-elizabeth-ii/'>
                        <img className='focus-image' src='https://d1pe6f90ru47yo.cloudfront.net/wp-content/uploads/2022/09/09071213/9522632601_141380c97f_o-860x375.jpg' alt='headline'/>
                    </a>
                </div>
                <div className="focus-right">
                    <p className='article-date'>September 09, 2022</p>
                    <h1>International education marks passing of Her Majesty Queen Elizabeth II</h1>
                    <p className='article-subtitle'>
                        Tributes to Queen Elizabeth II have poured in from the international education sector following her death aged 96 on September 8.
                    </p>
                        <div className='article-read-more'>
                            <a href='https://thepienews.com/news/international-education-marks-passing-of-queen-elizabeth-ii/'>Read More &#8594;</a>
                        </div>
                </div>
            </div>

            <div className="article-grid">
                {
                    NEWS_JSON.map((article) => {
                        return <a href={article.articleUrl} target="_blank" rel="noreferrer">
                        <div className="individual-article-block" id={article.id}>
                            <div className="individual--article__block--img">
                            <img className='focus-image' src={article.imageUrl} alt='headline'/>
                        </div>
                        <div className="individual--article-text">
                        <p className='article-date'>{article.date}</p>
                        <h3>{article.title}</h3>
                        <p className='article-subtitle'>
                            {article.subtitle}
                        </p>
                        <div className='article-read-more'>
                                     <a href={article.articleUrl} >
                                Read More &#8594;
                            </a>
                        </div>
               

                        </div>

                        </div>
                        </a>

                    })
                }

            </div>
        </div>
    </div>
  )
}

export default News