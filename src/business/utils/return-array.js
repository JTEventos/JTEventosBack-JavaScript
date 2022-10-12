exports.convertInviteListToArray = async (event) => {
    try {
        let inviteList = event.inviteList;
        delete event.invite_list;
  
        Object.defineProperty(event, "inviteList", {
            value: inviteList.split(", "),
            writable: false,
            enumerable: true,
            configurable: true,
        });
    } catch (e) {
        throw e;
    }
}

exports.forEachConvertInviteListToArray = async (events) => {
    events = Array<events>
    events.forEach(convertInviteListToArray);
}