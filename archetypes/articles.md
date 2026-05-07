+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
summary = 'Short description of what the article is about' # keep under 250 characters
date = '{{ .Date }}'
lastmod = '{{ .Date }}'
topics = [ 'democracy', 'cooperative', 'public-ownership' ]
authors = [ 'joe-biden' ] # see content/authors folder
category = 'economy'
feature = false # for especially good articles
editors_pick = false # for articles to be shown in the editor's picks box.
draft = true
[Params.image]
source = 'https://picture.example/cool-picture.webp'
description = 'This is a good description of the image.'
credit = 'Name Surname / Institution'
+++
