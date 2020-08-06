import React, { useState } from "react";
import { Button, Comment, Form, Header, Icon } from "semantic-ui-react";

export default function Comments({ comments, onClick, onDeleteComment }) {
  const [comment, setComment] = useState(undefined)

  function handleOnClick() {
    onClick(comment)
    setComment('')
  }

  return (
    <div className="comments">
      <Comment.Group>
        <Header as="h4" dividing>
          Comments
        </Header>

        {comments.map(comment => (
          <Comment>
            <Comment.Content>
              <Comment.Author as="a">{comment.from.name}</Comment.Author>
              <Comment.Metadata>
                <div>{new Date(comment.createdAt).toLocaleString('en-GB')}</div>
                <Icon name='close' link onClick={() => onDeleteComment(comment.id)} />
              </Comment.Metadata>
              <Comment.Text>{comment.comment}</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        ))}

        <Form onSubmit={() => handleOnClick()} reply>
          <Form.TextArea onChange={e => setComment(e.target.value)} value={comment} />
          <Button
            content="Add comment"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Comment.Group>
    </div>
  );
}
