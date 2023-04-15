export function addButton(where, type) {
    const BUTTON = $(where).append("button");
    let sign = "";
    if (type = "del") {sign = "törlés"};
    if (type = "add") {sign = "kosárba"};
    if (type = "like") {sign = "kedvencekhez"};
    if (type = "req") {sign = "értésítést kérek"};
    BUTTON.innertext(sign);
    whatToDo(type);
};

export function whatToDo(job) {
    let destiny = "";
    if (job = "del") {destiny = "splice"};
    if (job = "add") {destiny = "kosárba"};
    if (job = "like") {destiny = "kedvencekhez"};
    if (job = "req") {destiny = "értésítést kérek"};
}