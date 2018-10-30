export const replyFunction = (reply, err, content) => {
    if (err) {
        reply.send(err);
    }

    reply.json(content);
}
