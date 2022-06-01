/*import _ from 'lodash';
//importing firebase
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';
import { getDatabase, ref, onValue, goOnline, goOffline} from "firebase/database";
import { sliceIntoChunks } from './index';

const commentsArr = []
let childData;

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const comments = (ref(db, 'comments/'));
onValue(comments, (snapshot) => {
    snapshot.forEach((childsnapshot) => {
        childData = childsnapshot.val()
        commentsArr.push(childData)
    })
    console.log(sliceIntoChunks(commentsArr, 1))
})*/

