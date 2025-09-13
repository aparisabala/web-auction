import sequelize from "#src/config/sequelizeConnection";
import SkUserMessage from "#src/models/skUserMessage";

const saveChat = async (context,data) => {
    const t = await sequelize.transaction(); // start transaction
    try {
        const user = await SkUserMessage.create(
            { sk_user_chat_console_id: data?.console_id, sender_id: data?.sender_id,message: data?.message },
            { transaction: t }
        );
        await t.commit();
        if(user) {
            context.io.emit("chat", data);
        }
    } catch (err) {
        await t.rollback();
        console.error("Error, transaction rolled back:", err.message);
    }
}

export default saveChat;