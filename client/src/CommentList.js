const CommentList = ({ comments }) => {
    return (
        <ul>
            {
                comments.map(comment => {
                    let content;

                    switch(comment.status) {
                        case 'approved':
                            content = comment.content;
                            break;
                        case 'rejected':
                            content = 'Comment rejected';
                            break;
                        case 'pending':
                            content = 'Pending approval';
                            break;
                    }

                    return <li key={comment.id}>{content}</li>
                })
            }
        </ul>
    );
};

export default CommentList;