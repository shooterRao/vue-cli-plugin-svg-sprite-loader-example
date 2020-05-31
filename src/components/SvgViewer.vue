<script>
// get all svg name
const icons = require
  .context("../icon", false, /\.svg$/)
  .keys()
  .map(name => name.replace(/^\.\/([\w-]+)\.svg/, "$1"));

export default {
  name: 'SvgViewer',
  methods: {
    async handleIconClick(iconName) {
      await navigator.clipboard.writeText(`<SvgIcon name='${iconName}' />`);
      alert(`${iconName} icon code has been copied to the clipboard`);
    }
  },
  render() {
    const { SvgIcon } = this.$options.components;
    return (
      <div class="icon-view">
        <p>点一点图标就能取代码</p>
        <p>Click on the icon to get the code</p>
        {icons.map(iconName => (
          <div class="icon" on-click={() => this.handleIconClick(iconName)}>
            <SvgIcon name={iconName} />
            <span class="icon-name">{iconName}</span>
          </div>
        ))}
      </div>
    );
  },
}

</script>
<style scoped>
.icon-view {
  width: 100%;
  height: 100%;
  font-size: 32px;
}

.icon-view p {
  text-align: center;
  margin: 10px;
}

.icon-view .icon {
  display: inline-block;
  text-align: center;
  margin: 9px 8px;
  width: 100px;
  height: 80px;
  border-radius: 8%;
  cursor: pointer;
}

.icon-view .icon i {
  transition: transform 0.2s;
}

.icon-view .icon i:hover {
  transform: scale(1.5);
}

.icon-view .icon .icon-name {
  font-size: 12px;
  margin-top: 5px;
  display: block;
}
</style>
