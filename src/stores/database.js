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
  'press': [
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
    },
    {
      'category': 'web', // magazine
      'createdAt': new Date(),
      'images': [],
      'text': '',
      'title': ''
    },
    {
      'category': 'web', // magazine
      'createdAt': new Date(),
      'images': [],
      'text': '',
      'title': ''
    }
  ]
};
