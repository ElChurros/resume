import React from 'react';

export class ImageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.bgs = ['skills', 'training', 'experience', 'projects'];
    this.logos = ['html', 'css', 'javascript', 'c++', 'python', 'php', 'react', 'vue', 'angular','nodejs', 'django', 'symfony', 'androidstudio', 'mongodb', 'sql', 'git', 'docker', 'nginx', 'apache', 'circleci'];
    this.sectionimages = ['studio'];
    this.images = []
  }

  componentDidMount() {
    this.bgs.forEach(name => {
      let img = new Image();
      img.src = `${process.env.PUBLIC_URL}/${name}.png`;
      this.images.push(img);
    })
    this.logos.forEach(name => {
      let img = new Image();
      img.src = `${process.env.PUBLIC_URL}/logos/${name}-logo.png`;
      this.images.push(img);
    })
    this.sectionimages.forEach(name => {
      let img = new Image();
      img.src = `${process.env.PUBLIC_URL}/${name}.png`;
      this.images.push(img);
    })
  }

  render() {
    return null;
  }
}

export default ImageLoader;