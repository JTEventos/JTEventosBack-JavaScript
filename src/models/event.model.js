class Event {
    _id;
    _eventTypeId;
    _customerId;
    _establishmentId;
    _description;
    _startDate;
    _finishDate;
    _inviteList;
    
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    
    get eventTypeId() {
        return this._eventTypeId;
    }
    set eventTypeId(value) {
        this._eventTypeId = value;
    }
    
    get customerId() {
        return this._customerId;
    }
    set customerId(value) {
        this._customerId = value;
    }
    
    get establishmentId() {
        return this._establishmentId;
    }
    set establishmentId(value) {
        this._establishmentId = value;
    }
    
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    
    get startDate() {
        return this._startDate;
    }
    set startDate(value) {
        this._startDate = value;
    }
    
    get finishDate() {
        return this._finishDate;
    }
    set finishDate(value) {
        this._finishDate = value;
    }
    
    get inviteList() {
        return this._inviteList;
    }
    set inviteList(value) {
        this._inviteList = value;
    }
}