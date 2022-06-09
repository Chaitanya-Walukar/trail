import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {

    meetingRoomsInfo = [

        {roomName : 'A-01',  roomCapacity : '11'},
        {roomName : 'A-02',  roomCapacity : '31'}, 
        {roomName : 'A-03',  roomCapacity : '21'},
        {roomName : 'B-01',  roomCapacity : '51'},
        {roomName : 'B-02',  roomCapacity : '41'},
        {roomName : 'B-03',  roomCapacity : '81'},
        {roomName : 'C-01',  roomCapacity : '101'},
        {roomName : 'C-02',  roomCapacity : '91'},
        {roomName : 'C-03',  roomCapacity : '111'}
    ];
}