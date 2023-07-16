import React, { useState } from 'react';
import { IProject, ProjectStatus } from '../data/types';
import { MultiSelect } from 'react-multi-select-component';

const tagsOptions = ['Web', 'Frontend', 'Backend', 'React.js', 'Sass'];

const ProjectCreationPage = () => {
  const [formData, setFormData] = useState<
    Partial<IProject & { newTag: string }>
  >({
    title: '',
    description: '',
    image: '',
    tags: [],
    status: 'Started',
    newTag: '',
  });

  const [jsonData, setJsonData] = useState<IProject>();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleAddNewTag = (_tags: any[]) => {
    setFormData((val) => ({
      ...val,
      tags: _tags.map((_tag: any) => _tag.value),
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { newTag, ...jsonDataWithoutNewTag } = formData;
    setJsonData(jsonDataWithoutNewTag as IProject);
  };

  const handleCopyJson = () => {
    const JsonData = JSON.stringify(jsonData, null, 2);
    navigator.clipboard.writeText(JsonData);
    // alert('JSON data copied to clipboard!');
  };

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-6'>Project Creation</h1>
      <form onSubmit={handleFormSubmit} className='mb-6'>
        <div className='mb-4'>
          <label htmlFor='title' className='block font-medium mb-2'>
            Title:
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleInputChange}
            className='w-full border-gray-300 rounded-md p-2'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='description' className='block font-medium mb-2'>
            Description:
          </label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            className='w-full border-gray-300 rounded-md p-2'
          ></textarea>
        </div>

        <div className='mb-4'>
          <label htmlFor='tags' className='block font-medium mb-2'>
            Tags:
          </label>

          <MultiSelect
            options={tagsOptions.map((_tag) => ({
              label: _tag,
              value: _tag,
            }))}
            labelledBy='Tags Select'
            isCreatable
            value={formData.tags!.map((_tag: any) => ({
              label: _tag,
              value: _tag,
            }))}
            onChange={handleAddNewTag}
          />
        </div>

        <div className='flex gap-x-4 w-full'>
          <div className='mb-4 w-full'>
            <label htmlFor='status' className='block font-medium mb-2'>
              Status:
            </label>
            <select
              className='w-full border-gray-300 rounded-md p-2'
              onChange={handleInputChange}
              value={formData.status}
              name='status'
              id='status'
            >
              {ProjectStatus.map((status) => (
                <option value={status}>{status}</option>
              ))}
            </select>
          </div>

          <div className='mb-4 w-full'>
            <label htmlFor='image' className='block font-medium mb-2'>
              Image:
            </label>
            <input
              type='text'
              id='image'
              name='image'
              value={formData.image}
              onChange={handleInputChange}
              className='w-full border-gray-300 rounded-md p-2'
            />
          </div>
        </div>

        <div className='flex gap-x-4 w-full'>
          <div className='mb-4 w-full'>
            <label htmlFor='githubRepo' className='block font-medium mb-2'>
              {/* liveDemo */}
              GithubRepo:
            </label>
            <input
              type='text'
              id='githubRepo'
              name='githubRepo'
              value={formData.githubRepo ?? ''}
              onChange={handleInputChange}
              className='w-full border-gray-300 rounded-md p-2'
            />
          </div>
          <div className='mb-4 w-full'>
            <label htmlFor='liveDemo' className='block font-medium mb-2'>
              LiveDemo:
            </label>
            <input
              type='text'
              id='liveDemo'
              name='liveDemo'
              value={formData.liveDemo ?? ''}
              onChange={handleInputChange}
              className='w-full border-gray-300 rounded-md p-2'
            />
          </div>
        </div>

        <div className='flex gap-x-4 w-full'>
          <div className='mb-4 w-full'>
            <label htmlFor='startDate' className='block font-medium mb-2'>
              Start Date:
            </label>
            <input
              type='date'
              id='startDate'
              name='startDate'
              value={formData.startDate ?? ''}
              onChange={handleInputChange}
              className='w-full border-gray-300 rounded-md p-2'
            />
          </div>
          <div className='mb-4 w-full'>
            <label htmlFor='endDate' className='block font-medium mb-2'>
              End Date:
            </label>
            <input
              type='date'
              id='endDate'
              name='endDate'
              value={formData.endDate ?? ''}
              onChange={handleInputChange}
              className='w-full border-gray-300 rounded-md p-2'
            />
          </div>
        </div>

        <button
          type='submit'
          className='bg-blue-500 text-white py-2 px-4 rounded-md'
        >
          Create Project
        </button>
      </form>
      {jsonData && (
        <div>
          <h2 className='text-xl font-bold mb-2'>JSON Data:</h2>
          <div className='relative group'>
            <pre className='border border-gray-300 p-4 bg-gray-100 rounded-sm'>
              {JSON.stringify(jsonData, null, 2)}
            </pre>
            <button
              onClick={handleCopyJson}
              className='absolute top-3 right-3 bg-blue-500 text-white text-sm py-2 px-4 rounded-md focusRing opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 hover:animate-pulse transition'
            >
              Copy JSON
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCreationPage;
