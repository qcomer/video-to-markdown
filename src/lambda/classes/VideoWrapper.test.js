import VideoWrapper from './VideoWrapper';

describe('VideoWrapper', () => {
  describe('"create" method must instantiate the correct Video Provider.', () => {
    it('dailymotion', () => {
      expect(VideoWrapper.create('https://www.dailymotion.com/video/x3ke49').providerName).toBe('dailymotion');
    });

    it('vimeo', () => {
      expect(VideoWrapper.create('https://vimeo.com/263856289').providerName).toBe('vimeo');
    });

    it('youtube', () => {
      expect(VideoWrapper.create('https://www.youtube.com/watch?v=oRdzL2DX0yU').providerName).toBe('youtube');
    });

    it('facebook', () => {
      expect(
        VideoWrapper.create('https://www.facebook.com/backintimetheparty/videos/1588846901182916/').providerName,
      ).toBe('facebook');
    });

    it('asciinema', () => {
      expect(VideoWrapper.create('https://asciinema.org/a/335480').providerName).toBe('asciinema');
    });

    it('google-drive', () => {
      expect(
        VideoWrapper.create('https://drive.google.com/file/d/5p_qEW432qT5_EWQjwTo-Q5FaEjjsWUvc/view').providerName,
      ).toBe('google-drive');
    });

    it('imgur', () => {
      expect(VideoWrapper.create('https://imgur.com/VT1vCoz').providerName).toBe('imgur');
    });

    it('onedrive', () => {
      expect(VideoWrapper.create('https://1drv.ms/v/s!An21T-lhvYKSkFpqKTb4YeZpKfzC?e=iXCxja').providerName).toBe(
        'onedrive',
      );
    });

    it('peertube', () => {
      expect(VideoWrapper.create('https://framatube.org/w/kkGMgK9ZtnKfYAgnEtQxbv?start=1s').providerName).toBe(
        'peertube',
      );
    });

    it('tiktok', () => {
      expect(VideoWrapper.create('https://www.tiktok.com/@tiktok/video/6584647400055377158').providerName).toBe(
        'tiktok',
      );
    });

    it('video', () => {
      expect(VideoWrapper.create('https://i.imgur.com/vhjwXMB.mp4').providerName).toBe('video');
    });

    it('loom', () => {
      expect(VideoWrapper.create('https://www.loom.com/share/3d0b326f650749bbb1fa13895dcd6563').providerName).toBe(
        'loom',
      );
    });

    it('wistia', () => {
      expect(VideoWrapper.create('https://home.wistia.com/medias/e4a27b971d').providerName).toBe('wistia');
    });

    it('streamable', () => {
      expect(VideoWrapper.create('https://streamable.com/1nvj5i').providerName).toBe('streamable');
    });

    it('cleanshot-cloud', () => {
      expect(VideoWrapper.create('https://cln.sh/YRePNX').providerName).toBe('cleanshot-cloud');
    });
  });
});
