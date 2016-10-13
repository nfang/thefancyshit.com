import uuid from 'uuid';

export const IN_MEMORY_DB = {
  'visuals': [
    {
      'id': uuid.v4(),
      'src': '/assets/visuals/2014-FEB-01.jpg',
      'title': '2014 February 01'
    },
    {
      'id': uuid.v4(),
      'src': '/assets/visuals/2014-FEB-02.jpg',
      'title': '2014 February 02'
    }
  ],
  'posts': [
    {
      'category': 'WEB',
      'createdAt': new Date(2013, 2, 27),
      'images': [
        {
          'id': uuid.v4(),
          'name': '2013.03.27.WMAG',
          'src': '/assets/press/2013.03.27.WMAG.jpg'
        }
      ],
      'text': '',
      'title': 'FANCY SH!T on W Magazine'
    },
    {
      'category': 'WEB',
      'createdAt': new Date(2013, 2, 27),
      'images': [
        {
          'id': uuid.v4(),
          'name': '2013.03.27.AW13',
          'src': '/assets/press/2013.03.27.AW13.jpg'
        }
      ],
      'text': '',
      'title': 'AW13时装周秀场外街拍'
    },
    {
      'category': 'MAGAZINE',
      'createdAt': new Date(2013, 2, 27),
      'images': [
        {
          'id': uuid.v4(),
          'name': '2013.03.27.1626',
          'src': '/assets/press/2013.03.27.1626s.jpg'
        }
      ],
      'text': '',
      'title': '1626'
    },
    {
      'category': 'MAGAZINE',
      'createdAt': new Date(2013, 2, 27),
      'images': [
        {
          'id': uuid.v4(),
          'name': '2013.03.27.LB',
          'src': '/assets/press/2013.03.27.LB.jpg'
        }
      ],
      'text': '创始人和设计师@dearAvivi身着的是FANCY SH!T之前极受欢迎的欧洲古典风白衬衫。',
      'title': 'FANCY SH!T在《外滩画报》第507期'
    },
    {
      'category': 'WEB',
      'createdAt': new Date(2013, 2, 27),
      'images': [
        {
          'id': uuid.v4(),
          'name': '2013.03.27.SL1',
          'src': '/assets/press/2013.03.27.SL1.jpg'
        },
        {
          'id': uuid.v4(),
          'name': '2013.03.27.SL2',
          'src': '/assets/press/2013.03.27.SL2.jpg'
        },
        {
          'id': uuid.v4(),
          'name': '2013.03.27.SL3',
          'src': '/assets/press/2013.03.27.SL3.jpg'
        }
      ],
      'text': '英国知名时装博客Style Bubble博主Susie Lau在最近博文中穿着FANCY SH!T佩兹利花纹真丝外套。印花撞印花，充满她的个人风格！',
      'title': 'Susie Lau身着FANCY SH!T佩兹利花纹真丝外套'
    },
    {
      'category': 'MAGAZINE',
      'createdAt': new Date(2013, 0, 5),
      'images': [
        {
          'id': uuid.v4(),
          'name': '2013.01.05',
          'src': '/assets/press/2013.01.05.jpg'
        }
      ],
      'text': '',
      'title': '2013年 ELLE China'
    },
    {
      'category': 'WEB',
      'createdAt': new Date(2013, 0, 1),
      'images': [
        {
          'id': uuid.v4(),
          'name': '2013.01.01',
          'src': '/assets/press/2013.01.01.jpg'
        }
      ],
      'text': '',
      'title': 'FANCYSHIT 2013春季系列展览'
    },
    {
      'category': 'MAGAZINE',
      'createdAt': new Date(2013, 2, 27),
      'images': [
        {
          'id': uuid.v4(),
          'name': '2013.03.27.TOS1',
          'src': '/assets/press/2013.03.27.TOS1.jpg'
        },
        {
          'id': uuid.v4(),
          'name': '2013.03.27.TOS2',
          'src': '/assets/press/2013.03.27.TOS2.jpg'
        },
        {
          'id': uuid.v4(),
          'name': '2013.03.27.TOS3',
          'src': '/assets/press/2013.03.27.TOS3.jpg'
        }
      ],
      'text': '',
      'title': 'Time Out Shanghai 2012年10月刊'
    }
  ],
  'collection': [
    {
      'id': uuid.v4(),
      'photo': '/assets/collection/fancyshit-lookbook14winter-001.jpg',
      'season': 'spring',
      'title': '',
      'year': '2013'
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collection/fancyshit-lookbook14winter-002.jpg',
      'season': 'summer',
      'title': '',
      'year': '2013'
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collection/fancyshit-lookbook14winter-003.jpg',
      'season': 'winter',
      'title': '',
      'year': '2013'
    },
  ]
};
