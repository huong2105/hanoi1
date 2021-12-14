import { all, call } from "redux-saga/effects";
import { watchingGetBanner } from "./Banner/saga";
import { xemdulieuBanner } from "./bannermng/saga";
import { watchingGetListProduct } from "./ListProduct/saga";
import { watchingGetNewsDetail } from "./NewsDetail/saga";



// call saga nào thfi định nghĩa ở đây nhé
export default function* rootSaga() {
    yield all([

        call(watchingGetBanner),
        call(xemdulieuBanner),
        call(watchingGetListProduct),
        call(watchingGetNewsDetail),
    ]);
}

