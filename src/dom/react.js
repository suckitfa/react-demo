function createElement(type,config,children) {
    let props = {...config}
    // 多个儿子
    if (arguments.length>3) {
        children = Array.prototype.slice.call(arguments,2);
    }
    props.children = children;
    return {
        type,props
    }
}

const React = {
    createElement
}

export default React;