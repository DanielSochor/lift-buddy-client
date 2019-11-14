const deepCopyObj = (obj) => {
    const copyObj = () => {
      let copy = {};
  
      for (var key in obj) {
        copy[key] = deepCopyObj(obj[key]);
      }
  
      return copy;
    };
  
    const copyArr = () => {
      if (obj.length) {
        return obj.map(item => {
          return deepCopyObj(item);
        });
      } else {
        return [];
      }
    };
  
    let type = typeof obj;
  
    // typeof [Array] returns "object" so this is needed to check for arrays
    if (type === 'object' && Array.isArray(obj)) {
      type = 'array';
    }
  
    if (obj === null) {
      console.log('null type');
      return null;
    } else if (type === 'object') {
      return copyObj();
    } else if (type === 'array') {
      return copyArr();
    } else {
      return obj;
    }
  }

  export {
    //shallowCopyObj,
    deepCopyObj,
};