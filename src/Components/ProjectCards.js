import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import ProjectCard from './ProjectCard';

const ProjectCards = ({data, navigation}) => {
  return (
    <FlatList
      data={data.projects}
      renderItem={({item}) => (
        <ProjectCard
          key={item.id}
          data={item}
          labourData={data}
          navigation={navigation}
        />
      )}
      keyExtractor={item => item.id}
    />

    // <ScrollView contentContainerStyle={{flex: 1}}>
    //   {data?.projects?.map(obj => {
    //     return (
    //       <ProjectCard
    //         key={obj.id}
    //         data={obj}
    //         labourData={data}
    //         navigation={navigation}
    //       />
    //     );
    //   })}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ProjectCards;
