export function* watchClickSaga() {
    console.log('start saga');
}

export default function* rootSaga() {
    yield watchClickSaga();
}
