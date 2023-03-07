const canonicalProducts = {
  flagships: [
    {
      title: 'Canonical',
      url: 'https://canonical.com/',
      logoUrl: false,
      description: 'Find out more about the company behind these products.',
    },
    {
      title: 'Ubuntu',
      url: 'https://ubuntu.com/',
      logoUrl:
        'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M13.864%202.244a2.244%202.244%200%201%201-4.489-.002%202.244%202.244%200%200%201%204.489.002ZM4.49%207.17A2.244%202.244%200%201%201%200%207.169a2.244%202.244%200%200%201%204.489.001Zm2.83%205.787a5.484%205.484%200%200%201-3.738-2.848%203.226%203.226%200%200%201-1.924.239%207.328%207.328%200%200%200%205.269%204.413c.522.11%201.063.165%201.594.165a3.241%203.241%200%200%201-.66-1.877l-.07-.011c-.153-.024-.312-.049-.47-.08Zm6.03.01a2.244%202.244%200%201%201-4.488-.002%202.244%202.244%200%200%201%204.488.002Zm.89-.825a7.35%207.35%200%200%200%20.367-8.626A3.215%203.215%200%200%201%2013.34%205a5.557%205.557%200%200%201%20.523%203.736%205.544%205.544%200%200%201-.697%201.74%203.184%203.184%200%200%201%201.072%201.666ZM2.15%203.942a1.007%201.007%200%200%201-.08.005A7.402%207.402%200%200%201%209.044.238a3.173%203.173%200%200%200-.614%201.319c-.027.165-.055.33-.064.503a5.508%205.508%200%200%200-4.417%202.363%203.352%203.352%200%200%200-1.026-.412%203.343%203.343%200%200%200-.678-.073c-.033%200-.064.002-.094.004Z%27%20fill%3D%27%23E95420%27%2F%3E%3C%2Fsvg%3E',
      description:
        'The new standard secure enterprise Linux for servers, desktops, clouds, developers and things.',
    },
    {
      title: 'Snapcraft',
      url: 'https://snapcraft.io/',
      logoUrl:
        'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cg%20clip-path%3D%27url(%23a)%27%20fill%3D%27%23E95420%27%3E%3Cpath%20d%3D%27m15.839%205.293-1.447-2.8a.136.136%200%200%200-.051-.055.144.144%200%200%200-.074-.02h-5.8a.143.143%200%200%200-.091.03.13.13%200%200%200-.034.17.138.138%200%200%200%20.072.06l7.251%202.8a.144.144%200%200%200%20.17-.054.13.13%200%200%200%20.007-.13l-.003-.001ZM11.839%204.945.073.223A.073.073%200%200%200%20.026.221a.07.07%200%200%200-.038.027.065.065%200%200%200%20.007.086l7.962%208.182a.069.069%200%200%200%20.049.022.072.072%200%200%200%20.047-.019l3.805-3.461a.066.066%200%200%200%20.02-.061.065.065%200%200%200-.014-.03.07.07%200%200%200-.028-.02l.003-.002ZM5.382%207.183a.071.071%200%200%200-.062-.022.07.07%200%200%200-.03.011.067.067%200%200%200-.023.025l-4.13%207.696a.065.065%200%200%200-.005.046.068.068%200%200%200%20.027.038.072.072%200%200%200%20.09-.006L7.13%209.18a.066.066%200%200%200%200-.087l-1.75-1.91Z%27%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%27a%27%3E%3Cpath%20fill%3D%27%23fff%27%20d%3D%27M0%200h15.83v15.21H0z%27%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E',
      description:
        'The app store with secure packages and ultra-reliable updates for multiple Linux distros.',
      links: [
        {
          url: 'https://snapcraft.io/account',
          text: 'Login',
        },
      ],
    },
    {
      title: 'LXD',
      url: 'https://linuxcontainers.org/',
      logoUrl:
        'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cg%20clip-path%3D%27url(%23a)%27%20fill%3D%27%23E95420%27%3E%3Cpath%20d%3D%27M7.915%2015.068a.605.605%200%200%201-.3-.079l-6.078-3.437a.602.602%200%200%201-.22-.217.572.572%200%200%201-.08-.293V4.168c0-.103.027-.204.08-.293a.601.601%200%200%201%20.22-.217L7.615.221a.611.611%200%200%201%20.6%200l6.077%203.437a.601.601%200%200%201%20.22.217c.053.09.08.19.08.293v6.874a.572.572%200%200%201-.08.293.602.602%200%200%201-.221.217l-6.076%203.437a.616.616%200%200%201-.3.079Zm-5.477-4.366%205.477%203.097%205.477-3.097V4.507L7.915%201.411%202.438%204.507v6.195Z%27%2F%3E%3Cpath%20d%3D%27M7.915%209.894c1.29%200%202.336-1.025%202.336-2.29%200-1.264-1.046-2.289-2.336-2.289-1.29%200-2.337%201.025-2.337%202.29%200%201.264%201.046%202.289%202.337%202.289Z%27%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%27a%27%3E%3Cpath%20fill%3D%27%23fff%27%20d%3D%27M0%200h15.83v15.21H0z%27%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E',
      description:
        'A pure-container hypervisor. Replace legacy app VMs with containers for speed and density',
    },
    {
      title: 'MAAS',
      url: 'https://maas.io/',
      logoUrl:
        'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cg%20clip-path%3D%27url(%23a)%27%20fill%3D%27%23E95420%27%3E%3Cpath%20d%3D%27M1.936%202.592c.668%200%201.21-.515%201.21-1.151S2.604.29%201.936.29C1.267.29.726.805.726%201.44c0%20.637.541%201.152%201.21%201.152ZM14.56.576H3.404a1.587%201.587%200%200%201%20.024%201.69l-.026.04h11.156a.56.56%200%200%200%20.386-.15.518.518%200%200%200%20.16-.369v-.692a.502.502%200%200%200-.16-.369.543.543%200%200%200-.386-.15ZM1.936%206.701c.668%200%201.21-.515%201.21-1.15%200-.637-.542-1.152-1.21-1.152-.669%200-1.21.515-1.21%201.151s.541%201.151%201.21%201.151ZM14.56%204.685H3.404a1.612%201.612%200%200%201%20.242%201.083c-.03.215-.105.421-.219.608l-.026.04h11.157a.56.56%200%200%200%20.386-.15.518.518%200%200%200%20.16-.37v-.692a.5.5%200%200%200-.16-.369.542.542%200%200%200-.386-.15ZM1.936%2010.81c.668%200%201.21-.515%201.21-1.15%200-.637-.542-1.152-1.21-1.152-.669%200-1.21.515-1.21%201.151s.541%201.151%201.21%201.151ZM14.56%208.795H3.404a1.611%201.611%200%200%201%20.243%201.082%201.581%201.581%200%200%201-.245.648h11.156a.559.559%200%200%200%20.386-.15.517.517%200%200%200%20.16-.37v-.692a.502.502%200%200%200-.16-.368.543.543%200%200%200-.386-.15ZM1.936%2014.92c.668%200%201.21-.515%201.21-1.15%200-.637-.542-1.152-1.21-1.152-.669%200-1.21.515-1.21%201.151s.541%201.151%201.21%201.151ZM14.56%2012.904H3.404a1.611%201.611%200%200%201%20.242%201.082%201.58%201.58%200%200%201-.219.608l-.026.04h11.157a.562.562%200%200%200%20.386-.15.517.517%200%200%200%20.16-.37v-.692a.5.5%200%200%200-.16-.369.543.543%200%200%200-.386-.15Z%27%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%27a%27%3E%3Cpath%20fill%3D%27%23fff%27%20d%3D%27M0%200h15.83v15.21H0z%27%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E',
      description:
        'Create a bare-metal cloud with Metal as a Service for IPAM and provisioning',
    },
    {
      title: 'OpenStack',
      url: 'https://ubuntu.com/openstack',
      logoUrl:
        'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M13.864%202.244a2.244%202.244%200%201%201-4.489-.002%202.244%202.244%200%200%201%204.489.002ZM4.49%207.17A2.244%202.244%200%201%201%200%207.169a2.244%202.244%200%200%201%204.489.001Zm2.83%205.787a5.484%205.484%200%200%201-3.738-2.848%203.226%203.226%200%200%201-1.924.239%207.328%207.328%200%200%200%205.269%204.413c.522.11%201.063.165%201.594.165a3.241%203.241%200%200%201-.66-1.877l-.07-.011c-.153-.024-.312-.049-.47-.08Zm6.03.01a2.244%202.244%200%201%201-4.488-.002%202.244%202.244%200%200%201%204.488.002Zm.89-.825a7.35%207.35%200%200%200%20.367-8.626A3.215%203.215%200%200%201%2013.34%205a5.557%205.557%200%200%201%20.523%203.736%205.544%205.544%200%200%201-.697%201.74%203.184%203.184%200%200%201%201.072%201.666ZM2.15%203.942a1.007%201.007%200%200%201-.08.005A7.402%207.402%200%200%201%209.044.238a3.173%203.173%200%200%200-.614%201.319c-.027.165-.055.33-.064.503a5.508%205.508%200%200%200-4.417%202.363%203.352%203.352%200%200%200-1.026-.412%203.343%203.343%200%200%200-.678-.073c-.033%200-.064.002-.094.004Z%27%20fill%3D%27%23E95420%27%2F%3E%3C%2Fsvg%3E',
      description:
        'Upgrades, maintenance, support, and fully managed options for long-term low-cost infra.',
    },
    {
      title: 'Kubernetes',
      url: 'https://ubuntu.com/kubernetes',
      logoUrl:
        'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M13.864%202.244a2.244%202.244%200%201%201-4.489-.002%202.244%202.244%200%200%201%204.489.002ZM4.49%207.17A2.244%202.244%200%201%201%200%207.169a2.244%202.244%200%200%201%204.489.001Zm2.83%205.787a5.484%205.484%200%200%201-3.738-2.848%203.226%203.226%200%200%201-1.924.239%207.328%207.328%200%200%200%205.269%204.413c.522.11%201.063.165%201.594.165a3.241%203.241%200%200%201-.66-1.877l-.07-.011c-.153-.024-.312-.049-.47-.08Zm6.03.01a2.244%202.244%200%201%201-4.488-.002%202.244%202.244%200%200%201%204.488.002Zm.89-.825a7.35%207.35%200%200%200%20.367-8.626A3.215%203.215%200%200%201%2013.34%205a5.557%205.557%200%200%201%20.523%203.736%205.544%205.544%200%200%201-.697%201.74%203.184%203.184%200%200%201%201.072%201.666ZM2.15%203.942a1.007%201.007%200%200%201-.08.005A7.402%207.402%200%200%201%209.044.238a3.173%203.173%200%200%200-.614%201.319c-.027.165-.055.33-.064.503a5.508%205.508%200%200%200-4.417%202.363%203.352%203.352%200%200%200-1.026-.412%203.343%203.343%200%200%200-.678-.073c-.033%200-.064.002-.094.004Z%27%20fill%3D%27%23E95420%27%2F%3E%3C%2Fsvg%3E',
      description:
        'App portability for K8s on VMware, Amazon, Azure, Google, Oracle, IBM and bare metal.',
    },
    {
      title: 'Juju',
      url: 'https://juju.is/',
      logoUrl:
        'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cg%20clip-path%3D%27url(%23a)%27%20fill%3D%27%23E95420%27%3E%3Cpath%20d%3D%27M9.618.272c-.634%200-1.243.243-1.691.674-.448.43-.7%201.015-.701%201.624v4.221a1.9%201.9%200%200%201%201.362%200v-4.22a.955.955%200%200%201%20.291-.72%201.067%201.067%200%200%201%201.479%200%20.955.955%200%200%201%20.29.719v.962h1.363V2.57c0-.61-.253-1.194-.702-1.625A2.445%202.445%200%200%200%209.618.272ZM9.017%208.433c0%20.21-.065.417-.187.593a1.102%201.102%200%200%201-.499.393c-.203.08-.426.102-.642.06a1.125%201.125%200%200%201-.568-.292%201.055%201.055%200%200%201-.304-.547%201.028%201.028%200%200%201%20.064-.616c.084-.195.226-.362.41-.479a1.143%201.143%200%200%201%201.401.133c.103.1.185.217.24.347.057.129.085.268.085.408ZM2.773%205.855c-.634.001-1.242.244-1.69.674C.633%206.96.381%207.545.38%208.154v4.082a1.901%201.901%200%200%201%201.363%200V8.154a.955.955%200%200%201%20.29-.719%201.067%201.067%200%200%201%201.479%200%20.955.955%200%200%201%20.29.719v.962h1.363v-.962c0-.61-.253-1.194-.702-1.625a2.444%202.444%200%200%200-1.69-.674ZM2.166%2013.878c0%20.21-.065.415-.186.59-.121.174-.294.31-.496.39-.202.08-.424.102-.638.06a1.119%201.119%200%200%201-.565-.29%201.049%201.049%200%200%201-.302-.543c-.043-.206-.02-.42.063-.614.084-.194.225-.36.407-.476a1.136%201.136%200%200%201%201.394.133%201.024%201.024%200%200%201%20.323.75Z%27%2F%3E%3Cpath%20d%3D%27M14.752%204.76a1.789%201.789%200%200%201-.681-.126v2.411a.972.972%200%200%201-.312.682c-.193.179-.45.28-.718.28-.268%200-.526-.101-.718-.28a.972.972%200%200%201-.312-.682V4.32h-1.363v2.726c0%20.61.252%201.195.7%201.626a2.443%202.443%200%200%200%201.692.673c.635%200%201.244-.242%201.692-.673.449-.431.7-1.016.7-1.626v-2.41a1.9%201.9%200%200%201-.68.125ZM15.858%202.822c.037.225%200%20.455-.107.658a1.1%201.1%200%200%201-.49.472%201.161%201.161%200%200%201-1.302-.198%201.04%201.04%200%200%201-.206-1.251%201.1%201.1%200%200%201%20.492-.47%201.161%201.161%200%200%201%201.299.199c.166.16.276.366.314.59ZM7.907%2010.2c-.233%200-.465-.042-.681-.126V12.6a.97.97%200%200%201-.302.7%201.05%201.05%200%200%201-.728.29%201.05%201.05%200%200%201-.728-.29.97.97%200%200%201-.302-.7V9.845H3.804V12.6c0%20.61.252%201.194.7%201.625a2.443%202.443%200%200%200%201.692.674c.634%200%201.243-.243%201.692-.674.448-.43.7-1.015.7-1.625v-2.526a1.887%201.887%200%200%201-.68.127Z%27%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%27a%27%3E%3Cpath%20fill%3D%27%23fff%27%20d%3D%27M0%200h15.83v15.21H0z%27%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E',
      description:
        'Model-driven multi-cloud operations for applications. On-premise or on-cloud SAAS app store, with big data, k8s and openstack solutions',
    },
    {
      title: 'Multipass',
      url: 'https://multipass.run/',
      logoUrl:
        'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cg%20clip-path%3D%27url(%23a)%27%20fill%3D%27%23E95420%27%3E%3Cpath%20d%3D%27M15.138%2013.521c0%20.273-.084.538-.241.765a1.42%201.42%200%200%201-.643.506c-.261.104-.549.131-.826.078a1.45%201.45%200%200%201-.733-.376%201.359%201.359%200%200%201-.392-.705%201.325%201.325%200%200%201%20.082-.794c.108-.252.292-.466.527-.617a1.473%201.473%200%200%201%201.807.171c.269.258.42.608.42.973ZM3.553%2013.521c0%20.272-.084.538-.24.764a1.42%201.42%200%200%201-.643.507c-.262.104-.55.131-.827.078a1.45%201.45%200%200%201-.733-.376%201.36%201.36%200%200%201-.392-.704%201.325%201.325%200%200%201%20.082-.795c.108-.251.292-.466.527-.617a1.473%201.473%200%200%201%201.807.171c.269.258.42.608.42.973ZM9.367%2012.146c0%20.276-.084.546-.244.776-.16.23-.386.408-.651.514a1.508%201.508%200%200%201-.84.08%201.472%201.472%200%200%201-.743-.382%201.38%201.38%200%200%201-.398-.714%201.344%201.344%200%200%201%20.083-.806c.11-.255.296-.473.535-.627a1.494%201.494%200%200%201%201.833.174c.272.26.425.616.425.985Z%27%2F%3E%3Cpath%20d%3D%27M12.542%202.856c.17.314.268.659.288%201.012v7.58a2.404%202.404%200%200%201%201.756%200v-7.58a4.01%204.01%200%200%200-.458-1.74C13.504.957%2012.326.31%2010.818.31c-1.226%200-2.232.433-2.903%201.226C7.245.744%206.238.313%205.012.313c-1.51%200-2.686.645-3.31%201.818a4.015%204.015%200%200%200-.458%201.74v7.581a2.404%202.404%200%200%201%201.756%200V3.874c.02-.355.117-.702.288-1.018C3.613%202.28%204.177%202%205.012%202s1.405.29%201.733.885c.173.329.272.688.292%201.055v6.133a2.402%202.402%200%200%201%201.756%200V3.946c.02-.37.119-.73.292-1.06.328-.595.9-.885%201.733-.885.834%200%201.4.28%201.724.855Z%27%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%27a%27%3E%3Cpath%20fill%3D%27%23fff%27%20d%3D%27M0%200h15.83v15.21H0z%27%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E',
      description:
        'On-demand build-and-test VMs for cloud devs on Windows, Mac and Linux desktops',
    },
    {
      title: 'Ubuntu Pro',
      url: 'https://ubuntu.com/pro',
      logoUrl:
        'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2016%2016%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M13.864%202.244a2.244%202.244%200%201%201-4.489-.002%202.244%202.244%200%200%201%204.489.002ZM4.49%207.17A2.244%202.244%200%201%201%200%207.169a2.244%202.244%200%200%201%204.489.001Zm2.83%205.787a5.484%205.484%200%200%201-3.738-2.848%203.226%203.226%200%200%201-1.924.239%207.328%207.328%200%200%200%205.269%204.413c.522.11%201.063.165%201.594.165a3.241%203.241%200%200%201-.66-1.877l-.07-.011c-.153-.024-.312-.049-.47-.08Zm6.03.01a2.244%202.244%200%201%201-4.488-.002%202.244%202.244%200%200%201%204.488.002Zm.89-.825a7.35%207.35%200%200%200%20.367-8.626A3.215%203.215%200%200%201%2013.34%205a5.557%205.557%200%200%201%20.523%203.736%205.544%205.544%200%200%201-.697%201.74%203.184%203.184%200%200%201%201.072%201.666ZM2.15%203.942a1.007%201.007%200%200%201-.08.005A7.402%207.402%200%200%201%209.044.238a3.173%203.173%200%200%200-.614%201.319c-.027.165-.055.33-.064.503a5.508%205.508%200%200%200-4.417%202.363%203.352%203.352%200%200%200-1.026-.412%203.343%203.343%200%200%200-.678-.073c-.033%200-.064.002-.094.004Z%27%20fill%3D%27%23E95420%27%2F%3E%3C%2Fsvg%3E',
      description:
        'Extended Security Maintenance, Kernel Livepatch, FIPS, enterprise support and certification.',
      links: [
        {
          url: 'https://ubuntu.com/pro/dashboard',
          text: 'Your subscriptions',
        },
        {
          url: 'https://support.canonical.com/',
          text: 'Support login',
        },
      ],
    },
  ],
  others: [
    {
      title: 'Launchpad',
      url: 'https://launchpad.net',
      description: 'The software collaboration platform behind Ubuntu.',
      links: [
        {
          url: 'https://launchpad.net/+login',
          text: 'Login',
        },
      ],
    },
    {
      title: 'Ubuntu Image Service',
      url: 'https://cloud-images.ubuntu.com/locator/',
      description:
        'Hardened, standardised or customised Ubuntu images on public clouds and private infra.',
    },
    {
      title: 'Cloud-init',
      url: 'https://cloud-init.io/',
      description:
        'Control and customise your cloud instances on boot and during their lifecycle.',
    },
    {
      title: 'Mir',
      url: 'https://mir-server.io/',
      description:
        'Ultra-fast and lightweight Wayland compositor for secure desktop and device displays.',
    },
    {
      title: 'Landscape',
      url: 'https://landscape.canonical.com/',
      description:
        'Updates, package management, repositories, security, and regulatory compliance for Ubuntu.',
    },
    {
      title: 'Netplan',
      url: 'http://www.netplan.io/',
      description:
        'Network abstraction for Linux to simplify and standardise complex network configuration.',
    },
    {
      title: 'Charmed Kubeflow',
      url: 'https://charmed-kubeflow.io',
      description: 'AI and MLOps at any scale, on any cloud.',
    },
    {
      title: 'MicroK8s',
      url: 'https://microk8s.io/',
      description:
        'Small, fast, and fully-conformant Kubernetes for developers and IoT.',
    },
    {
      title: 'MicroStack',
      url: 'https://microstack.run/',
      description: 'Single-node OpenStack for developers and IoT.',
    },
  ],
  resources: [
    {
      title: 'Webinars',
      url: 'https://ubuntu.com/blog?category=webinars#posts-list',
    },
    {
      title: 'Tutorials',
      url: 'https://tutorials.ubuntu.com/',
    },
    {
      title: 'Videos',
      url: 'https://ubuntu.com/blog?category=videos#posts-list',
    },
    {
      title: 'Case studies',
      url: 'https://ubuntu.com/blog?category=case-studies#posts-list',
    },
    {
      title: 'White papers',
      url: 'https://ubuntu.com/blog?category=white-papers#posts-list',
    },
    {
      title: 'Docs',
      url: 'https://docs.ubuntu.com/',
    },
    {
      title: 'Training',
      url: 'https://ubuntu.com/cloud/training',
    },
    {
      title: 'Blog',
      url: 'https://ubuntu.com/blog',
    },
    {
      title: 'Developer',
      url: 'https://developer.ubuntu.com/',
    },
    {
      title: 'Install',
      url: 'https://ubuntu.com/download/cloud',
    },
    {
      title: 'Download',
      url: 'https://ubuntu.com/download',
    },
  ],
  abouts: [
    {
      title: 'Ubuntu',
      url: 'https://ubuntu.com/',
    },
    {
      title: 'Canonical',
      url: 'https://www.canonical.com/',
    },
    {
      title: 'Press centre',
      url: 'https://ubuntu.com/blog/press-centre',
    },
    {
      title: 'Partners',
      url: 'https://partners.ubuntu.com/',
    },
    {
      title: 'Contact',
      url: 'https://ubuntu.com/about/contact-us',
    },
  ],
};

// Nested sidebar structure for mobile
/* Items will have the following structure:
  
  title: The display name of the item 

  url: If it's a link then it will have a url

  children: If it opens a nested menu then it will have children 

  NOTE: items should not have both url and children properties.
*/
const canonicalProductsMobile = {
  title: 'All Canonical',
  isFirstLevel: true,
  children: [
    {
      title: 'Canonical',
      url: 'https://canonical.com/',
    },
    {
      title: 'Ubuntu',
      url: 'https://ubuntu.com/',
    },
    {
      title: 'Snapcraft',
      url: 'https://snapcraft.io/',
    },
    {
      title: 'LXD',
      url: 'https://linuxcontainers.org/',
    },
    {
      title: 'MAAS',
      url: 'https://maas.io/',
    },
    {
      title: 'OpenStack',
      url: 'https://ubuntu.com/openstack',
    },
    {
      title: 'Kubernetes',
      url: 'https://ubuntu.com/kubernetes',
    },
    {
      title: 'Juju',
      url: 'https://juju.is/',
    },
    {
      title: 'Multipass',
      url: 'https://multipass.run/',
    },
    {
      title: 'Ubuntu Pro',
      url: 'https://ubuntu.com/pro',
    },
    {
      title: 'Also from Canonical',
      children: [
        {
          title: 'Launchpad',
          url: 'https://launchpad.net',
        },
        {
          title: 'Ubuntu Image Service',
          url: 'https://cloud-images.ubuntu.com/locator/',
        },
        {
          title: 'Cloud-init',
          url: 'https://cloud-init.io/',
        },
        {
          title: 'Mir',
          url: 'https://mir-server.io/',
        },
        {
          title: 'Landscape',
          url: 'https://landscape.canonical.com/',
        },
        {
          title: 'Netplan',
          url: 'http://www.netplan.io/',
        },
        {
          title: 'Charmed Kubeflow',
          url: 'https://charmed-kubeflow.io',
        },
        {
          title: 'MicroK8s',
          url: 'https://microk8s.io/',
        },
        {
          title: 'MicroStack',
          url: 'https://microstack.run/',
        },
      ],
    },
    {
      title: 'Resources',
      children: [
        {
          title: 'Webinars',
          url: 'https://ubuntu.com/blog?category=webinars#posts-list',
        },
        {
          title: 'Tutorials',
          url: 'https://tutorials.ubuntu.com/',
        },
        {
          title: 'Videos',
          url: 'https://ubuntu.com/blog?category=videos#posts-list',
        },
        {
          title: 'Case studies',
          url: 'https://ubuntu.com/blog?category=case-studies#posts-list',
        },
        {
          title: 'White papers',
          url: 'https://ubuntu.com/blog?category=white-papers#posts-list',
        },
        {
          title: 'Docs',
          url: 'https://docs.ubuntu.com/',
        },
        {
          title: 'Training',
          url: 'https://ubuntu.com/cloud/training',
        },
        {
          title: 'Blog',
          url: 'https://ubuntu.com/blog',
        },
        {
          title: 'Developer',
          url: 'https://developer.ubuntu.com/',
        },
        {
          title: 'Install',
          url: 'https://ubuntu.com/download/cloud',
        },
        {
          title: 'Download',
          url: 'https://ubuntu.com/download',
        },
      ],
    },
    {
      title: 'About',
      children: [
        {
          title: 'Ubuntu',
          url: 'https://ubuntu.com/',
        },
        {
          title: 'Canonical',
          url: 'https://www.canonical.com/',
        },
        {
          title: 'Press centre',
          url: 'https://ubuntu.com/blog/press-centre',
        },
        {
          title: 'Partners',
          url: 'https://partners.ubuntu.com/',
        },
        {
          title: 'Contact',
          url: 'https://ubuntu.com/about/contact-us',
        },
      ],
    },
  ],
};

export { canonicalProducts, canonicalProductsMobile };
