import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import Disqus from '../Disqus/Disqus'
import Button from '../Button'
import './style.scss'

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const tags = post.fields.tagSlugs
    const image = post.frontmatter.image ? post.frontmatter.image.childImageSharp.resize.src : null
    const imageAlt = post.frontmatter.image_alt || 'Screenshot of work described here.'
    console.log(post.frontmatter.image)

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">
          Back
        </Link>
      </div>
    )
    
    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    const commentsBlock = (
      <div>
        <Disqus
          postNode={post}
          siteMetadata={this.props.data.site.siteMetadata}
        />
      </div>
    )

    const linksBlock = (
      <div className="post-single__link-block">
        {post.frontmatter.links &&
          post.frontmatter.links.map((link, i) => (
            <Button link={link.link} title={link.title} />
          ))}
      </div>
    )

    return (
      <div>
        {homeBlock}
        <div className="content">
          <div className="content__inner">
            <div className="post-single">
              { image &&
                <div className="post-single__image">
                  <img src={image} width="100%" alt={imageAlt} />
                </div>
              }
              <h1 className="post-single__title">{post.frontmatter.title}</h1>
              {linksBlock}
              <div className="post-single__inner">
                <div
                  className="post-single__body"
                  /* eslint-disable-next-line react/no-danger */
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <div className="post-single__date">
                  <em>
                    Published {moment(post.frontmatter.date).format('D MMM YYYY')}
                  </em>
                </div>
              </div>
              <div className="post-single__footer">
                {tagsBlock}
                <hr />
                <p className="post-single__footer-text">
                  {subtitle}
                  <a
                    href={`https://twitter.com/${author.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <br /> <strong>{author.name}</strong> on Twitter
                  </a>
                </p>
                {commentsBlock}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostTemplateDetails
