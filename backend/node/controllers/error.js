class CSSError {
  /* 
  selector: CSS selector
  category: error, warning, advice
  name: unique type name (Example: missing-alt, inconsistent-heading)
  description: description of error
  fix: procedure to fix the error
  count: count of occurrence
  */
  constructor(selector, category, name, description, fix, count) {
    this.selector = selector;
    this.category = category;
    this.name = name;
    this.description = description;
    this.fix = fix;
    this.count = count;
  }

  setCount(finalCount) {
    this.count = finalCount;
  }
}

export default CSSError;
