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
      'photo': '/assets/collections/2012/autumn/01.jpg',
      'season': 'autumn',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/autumn/02.jpg',
      'season': 'autumn',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/autumn/03.jpg',
      'season': 'autumn',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/autumn/04.jpg',
      'season': 'autumn',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/autumn/05.jpg',
      'season': 'autumn',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/autumn/06.jpg',
      'season': 'autumn',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/autumn/07.jpg',
      'season': 'autumn',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/winter/01.JPG',
      'season': 'winter',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/winter/02.JPG',
      'season': 'winter',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/winter/03.JPG',
      'season': 'winter',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/winter/04.JPG',
      'season': 'winter',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/winter/05.JPG',
      'season': 'winter',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/winter/06.JPG',
      'season': 'winter',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/winter/07.JPG',
      'season': 'winter',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/winter/08.JPG',
      'season': 'winter',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2012/winter/09.JPG',
      'season': 'winter',
      'year': '2012',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/spring/01.jpeg',
      'season': 'spring',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/spring/02.jpeg',
      'season': 'spring',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/spring/03.jpeg',
      'season': 'spring',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/spring/04.jpeg',
      'season': 'spring',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/spring/05.jpeg',
      'season': 'spring',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/spring/06.jpeg',
      'season': 'spring',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/spring/07.jpeg',
      'season': 'spring',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/spring/08.jpeg',
      'season': 'spring',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/spring/09.jpeg',
      'season': 'spring',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/spring/10.jpeg',
      'season': 'spring',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/spring/11.jpeg',
      'season': 'spring',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/spring/12.jpeg',
      'season': 'spring',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/summer/01.jpg',
      'season': 'summer',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/summer/02.jpg',
      'season': 'summer',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/summer/03.jpg',
      'season': 'summer',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/summer/04.jpg',
      'season': 'summer',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-001.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-002.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-003.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-004.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-005.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-006.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-007.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-008.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-009.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-010.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-011.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-012.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-013.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-014.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-015.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-016.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-017.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-018.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-019.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-020.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-021.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-022.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-023.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-024.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-025.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-026.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-027.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-028.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-029.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    },
    {
      'id': uuid.v4(),
      'photo': '/assets/collections/2013/winter/fancyshit-lookbook14winter-030.jpg',
      'season': 'winter',
      'year': '2013',
      'title': ''
    }
  ]
};
