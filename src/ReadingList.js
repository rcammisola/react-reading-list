var React = require('react');

var Title = React.createClass({
  render: function() {
    return (
      <h1>Reading List</h1>
    );
  }
});

var BookAdder = React.createClass({
  getInitialState: function() {
    return {
      name: ''
    };
  },
  handleBookInput: function(e) {
    this.setState({
      name: e.target.value
    });
  },
  clearName: function() {
    this.setState({
      name: ''
    });
  },
  submitBook: function(e) {
    e.preventDefault();
    if(this.state.name !== "") {
      this.props.onClick(this.state.name);
      this.clearName();
    }
  },
  render: function() {
    return (
      <form onSubmit={this.submitBook}>
        <input className="addName" type="text" placeholder="Book name" value={this.state.name} onChange={this.handleBookInput} />
        <input className="addBtn" type="submit" value="Add" />
      </form>
    );
  }
});

var BookList = React.createClass({
  handleDeletion: function(item) {
    var books = this.state.data.filter(function(book) {
      return item.id !== book.id;
    });
    this.sort(books, undefined);
  },
  getInitialState: function() {
    return { data: this.props.list };
  },
  dragStart: function(e) {
    this.dragged = Number(e.currentTarget.dataset.id);
    e.dataTransfer.effectAllowed = 'move';

    // Firefox requires calling dataTransfer.setData
    // for the drag to properly work
    e.dataTransfer.setData("text/html", e.currentTarget);
  },
  dragEnd: function(e) {
    this.sort(this.state.data, undefined);
  },
  dragOver: function(e) {
    var currentlyOver = e.currentTarget;
    var dragging = this.state.dragging;
    var from = isFinite(dragging) ? dragging : this.dragged;
    var to = Number(currentlyOver.dataset.id);
    if(this.isOverBottomHalf(e.clientY, currentlyOver)) to++;
    if(from < to) to--;

    var items = this.state.data;
    items.splice(to, 0, items.splice(from, 1)[0]);
    this.sort(items, to);
  },
  isOverBottomHalf: function(mouseY, currentlyOver) {
    var yValueInsideWithinElement = mouseY - currentlyOver.offsetTop;
    var verticalMidpoint = currentlyOver.offsetHeight / 2;

    return (yValueInsideWithinElement > verticalMidpoint);
  },
  sort: function(data, dragging) {
    this.setState({data: data, dragging: dragging});
    this.props.updateState(data);
  },
  render: function() {
    return (
      <ul className="bookList">
        {this.state.data.map(function(book, i){
            var draggingClass = this.state.dragging === i ? "dragging" : "";
            return (
              <li
                key={book.id}
                data-id={i}
                className={draggingClass}
                draggable="true"
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
                onDragEnd={this.dragEnd}>
                <div>
                  <label>{book.name}</label>
                  <button className="destroy" onClick={this.handleDeletion.bind(null, book)}></button>
                </div>
              </li>
              );
        }, this)}
      </ul>
    );
  }
});

var ReadingList = React.createClass({
  getInitialState: function() {
    return {
      nextId: 5,
      books: [
        { id: 1, name: "Hamlet" },
        { id: 2, name: "Romeo and Juliet" },
        { id: 3, name: "Java for Dummies" },
        { id: 4, name: "Catcher in the rye" }
      ]
    };
  },
  addBook: function(bookName) {
    var bookList = this.state.books;
    bookList.push({id: this.state.nextId++, name: bookName});
    this.setState({
      books: bookList
    });
  },
  updateBooks: function(books) {
    this.setState({ books: books });
  },
  render: function() {
    return (
      <div>
        <Title />
        <hr />
        <BookAdder onClick={this.addBook} />
        <hr />
        <BookList list={this.state.books} updateState={this.updateBooks} />
      </div>
    );
  }
});

module.exports = ReadingList;
