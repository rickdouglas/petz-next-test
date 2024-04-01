import Header from "../../components/Header/Header";
import {
  Description,
  DescriptionTitle,
  QuemSomosContainer,
  QuemSomosTitle,
} from "./QuemSomos.styles";

export default function QuemSomos() {
  return (
    <div data-testid="quem-somos">
      <Header
        navs="Home > Quem Somos"
        title="Quem Somos"
        discription="A maior rede de tratamento pokemon"
      />
      <QuemSomosContainer>
        <QuemSomosTitle>O Centro Pokemon</QuemSomosTitle>
        <DescriptionTitle>Como funciona a cura de um pokemon</DescriptionTitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vel mi ut nunc sodales mattis eget at sem. Praesent mattis interdum
          nulla, quis molestie justo lacinia a. Curabitur rutrum ante a ligula
          aliquet pellentesque. Phasellus ut elit fermentum, lacinia felis
          iaculis, aliquam augue. Vestibulum dignissim dignissim nisi sed
          tincidunt. Fusce magna magna, porta sit amet accumsan at, ullamcorper
          id magna. Proin congue dolor eget iaculis porta. Suspendisse sit amet
          scelerisque nisl. Nunc sagittis lacus at nulla auctor, ut euismod
          velit sollicitudin. Phasellus eu quam a quam luctus mollis non eu
          lacus. Quisque fringilla enim vitae est rhoncus, nec feugiat ex
          tincidunt. Donec venenatis pharetra elit, eget fermentum ipsum. Aenean
          auctor, arcu a sagittis tempor, quam nisl ullamcorper ante, vitae
          dictum elit augue eget leo. Aliquam ante nisi, porttitor vitae congue
          at, consectetur nec ligula. Vestibulum viverra elit et risus viverra
          imperdiet. Nullam egestas enim et lacus eleifend sollicitudin. Proin
          porttitor tincidunt fringilla. Sed et eros quis nibh mollis bibendum
          id eget dolor. Etiam hendrerit risus non libero varius, et suscipit
          nibh tempor. Donec ut aliquam massa. Aenean nec libero leo. Nullam
          dignissim augue a lacinia porttitor. Curabitur sed est sed metus
          gravida aliquet. Suspendisse potenti. Praesent condimentum
          pellentesque efficitur. Maecenas vel risus diam.
        </Description>
        <DescriptionTitle>Uma tradiçao de mais de 20 anos</DescriptionTitle>
        <Description>
          Etiam ac nisi sagittis, ullamcorper ex vel, dignissim urna. Mauris
          commodo diam ac purus elementum, nec molestie arcu tincidunt. Donec
          quis sollicitudin sapien, vitae tincidunt lorem. Sed vel est et orci
          pharetra interdum. Donec felis mauris, faucibus in hendrerit sed,
          malesuada vitae mi. Ut nec tellus ut lorem tincidunt iaculis. Mauris
          vulputate in ante at ultrices. Phasellus non ligula nec dolor suscipit
          dapibus nec at enim.
        </Description>
        <DescriptionTitle>O melhor para o seu pokemon</DescriptionTitle>
        <Description>
          Etiam ac nisi sagittis, ullamcorper ex vel, dignissim urna. Mauris
          commodo diam ac purus elementum, nec molestie arcu tincidunt. Donec
          quis sollicitudin sapien, vitae tincidunt lorem. Sed vel est et orci
          pharetra interdum. Donec felis mauris, faucibus in hendrerit sed,
          malesuada vitae mi. Ut nec tellus ut lorem tincidunt iaculis. Mauris
          vulputate in ante at ultrices. Phasellus non ligula nec dolor suscipit
          dapibus nec at enim.
        </Description>
        <DescriptionTitle>Alta tecnologia</DescriptionTitle>
        <Description>
          Etiam ac nisi sagittis, ullamcorper ex vel, dignissim urna. Mauris
          commodo diam ac purus elementum, nec molestie arcu tincidunt. Donec
          quis sollicitudin sapien, vitae tincidunt lorem. Sed vel est et orci
          pharetra interdum. Donec felis mauris, faucibus in hendrerit sed,
          malesuada vitae mi. Ut nec tellus ut lorem tincidunt iaculis. Mauris
          vulputate in ante at ultrices. Phasellus non ligula nec dolor suscipit
          dapibus nec at enim.
        </Description>
      </QuemSomosContainer>
    </div>
  );
}
