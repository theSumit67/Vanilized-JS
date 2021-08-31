const autoComplete = (dataList, el) => {

    if (Array.isArray(dataList)) {
        el.innerHTML = "";
        // Creates a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree. - avoids multiple re-render.
        const documentFragment = document.createDocumentFragment();

        dataList.forEach(listVal => {
            let opt = document.createElement("option");
            opt.text = listVal;
            opt.value = listVal;
            // appendChild can only append one node and returns the appended Node object.
            documentFragment.appendChild(opt);
        });
        // append can append several nodes and stringsand has no return value
        el.append(documentFragment);
    }
}

export { autoComplete };