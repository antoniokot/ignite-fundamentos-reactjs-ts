import { useState } from 'react';
import { 
  ThumbsUp,
  Trash
} from 'phosphor-react'

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment ({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/oGabrielArruda.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Arruda</strong>
              <time title="9 de fevereiro às 11:42" dateTime="2024-02-09 11:42:36">Cerca de 1h atrás</time>
            </div>

            <button 
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>


        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
