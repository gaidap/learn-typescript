import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name: string;
  user: User | undefined
}

class UserSarch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    if (foundUser) {
      this.setState({ name: '' });
    } else {
      console.log(`User ${this.state.name} not found.`);
    }
    this.setState({ name: foundUser });
  };

  render() {
    return (
      <div>
        User Search
        <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {this.state.user?.name} ({this.state.user?.age})
        </div>
      </div>
    );
  };
}

export default UserSarch;