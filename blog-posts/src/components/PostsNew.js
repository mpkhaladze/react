import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'
import { Link } from 'react-router'

class PostsNew extends Component {
  static contextTypes = {
    router:PropTypes.object
  }
  onSubmit (props) {
    this.props.createPost(props)
      .then(()=> {
        this.context.router.push('/')
      })
  }

  render () {
    const {fields: { title, categories, content }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h1>Create A New Post</h1>
        <div className={`form-group ${title.touched && title.error ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.error ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.error ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea rows="5" className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-success" >Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate (values) {
  const errors = {}

  if (!values.title) {
    errors.title = "Enter post title."
  }
  if (!values.categories) {
    errors.categories = "Enter post category."
  }
  if (!values.content) {
    errors.content = "Enter post content."
  }

  return errors
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew)
