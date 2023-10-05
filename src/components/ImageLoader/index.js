import { useEffect } from 'react';
import skills from '../../assets/skills.png'
import training from '../../assets/training.png'
import experience from '../../assets/experience.png'
import projects from '../../assets/projects.png'
import html from '../../assets/logos/html-logo.png'
import css from '../../assets/logos/css-logo.png'
import javascript from '../../assets/logos/javascript-logo.png'
import cpp from '../../assets/logos/cpp-logo.png'
import python from '../../assets/logos/python-logo.png'
import php from '../../assets/logos/php-logo.png'
import react from '../../assets/logos/react-logo.png'
import vue from '../../assets/logos/vue-logo.png'
import angular from '../../assets/logos/angular-logo.png'
import nodejs from '../../assets/logos/nodejs-logo.png'
import django from '../../assets/logos/django-logo.png'
import symfony from '../../assets/logos/symfony-logo.png'
import androidstudio from '../../assets/logos/androidstudio-logo.png'
import mongodb from '../../assets/logos/mongodb-logo.png'
import sql from '../../assets/logos/sql-logo.png'
import git from '../../assets/logos/git-logo.png'
import docker from '../../assets/logos/docker-logo.png'
import nginx from '../../assets/logos/nginx-logo.png'
import apache from '../../assets/logos/apache-logo.png'
import circleci from '../../assets/logos/circleci-logo.png'

const ImageLoader = () => {  
  useEffect(() => {
    new Image().src = skills
    new Image().src = training
    new Image().src = experience
    new Image().src = projects
    new Image().src = html
    new Image().src = css
    new Image().src = javascript
    new Image().src = cpp
    new Image().src = python
    new Image().src = php
    new Image().src = react
    new Image().src = vue
    new Image().src = angular
    new Image().src = nodejs
    new Image().src = django
    new Image().src = symfony
    new Image().src = androidstudio
    new Image().src = mongodb
    new Image().src = sql
    new Image().src = git
    new Image().src = docker
    new Image().src = nginx
    new Image().src = apache
    new Image().src = circleci
  }, [])

  return null
}

export default ImageLoader;